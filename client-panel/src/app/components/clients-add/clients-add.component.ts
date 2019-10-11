import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css']
})
export class ClientsAddComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    balance: new FormControl()
  })

  loading: boolean = false;

  constructor(
     private clientService: ClientService,
     private flashMessage: FlashMessagesService,
     private router: Router
    ) { }

  ngOnInit() {
  }

  createClient() {
    this.loading = true;
    this.clientService.persistClient(this.clientForm.value)
        .then(() => {
          this.flashMessage.show('Client created !', {
            cssClass: 'alert-info',
            timer: 3000
          });
          
          this.loading = false;
          this.router.navigate(['/clients']);
        })
        .catch((err) => {
          this.flashMessage.show(err, {
            cssClass: 'alert-danger',
            timer: 3000
          });
        })
  }

}
