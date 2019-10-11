import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: any[] = [];
  constructor(
      private clientService: ClientService,
      private flashMessage: FlashMessagesService 
    ) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients()
        .subscribe((res: any[]) => {
          console.log(res);
          this.clients = res;
        })
  }

  deleteClient(id: string) {
    this.clientService.destroyClient(id)
        .then(() => {
          this.flashMessage.show('Client deleted !', {
            cssClass: 'alert-info',
            timer: 3000
          })
        })
  }

}
