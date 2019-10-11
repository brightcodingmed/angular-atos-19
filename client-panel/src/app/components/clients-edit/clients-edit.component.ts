import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.css']
})
export class ClientsEditComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    balance: new FormControl()
  })

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.editClient(id);
  }

  editClient(id) {
    this.clientService.getClientById(id)
        .subscribe((res: Client) => {
           this.clientForm.patchValue({
            firstName: res.firstName,
            lastName: res.lastName,
            phone: res.phone,
            email: res.email,
            balance: res.balance
           })
        })
  }

}
