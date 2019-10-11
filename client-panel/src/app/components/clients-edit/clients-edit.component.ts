import { Client } from './../../models/client';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-clients-edit',
  templateUrl: './clients-edit.component.html',
  styleUrls: ['./clients-edit.component.css']
})
export class ClientsEditComponent implements OnInit {

  id: string = '';
  subscription: Subscription;
  clientObservable: Observable<any>;
  clientForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    balance: new FormControl()
  })

  constructor(
    private clientService: ClientService, 
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.editClient(this.id);
  }

  editClient(id) {
    this.clientObservable = this.clientService.getClientById<Client>(id);
        
   this.subscription = this.clientObservable
    .subscribe((res: Client) => {
        this.clientForm.patchValue({
          firstName: res.firstName,
          lastName: res.lastName,
          phone: res.phone,
          email: res.email,
          balance: res.balance,
        })
    });
  }

  updateClient() {
    this.clientService.updateClient(this.id, this.clientForm.value)
        .then(() => {
          this.clientForm.reset();
          this.router.navigate(['/clients']);
        })
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.clientForm.reset();
    this.subscription.unsubscribe();
  }

}
