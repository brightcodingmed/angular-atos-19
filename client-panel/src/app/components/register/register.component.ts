import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  }
  
  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.user.email, this.user.password)
        .then(() => {
          this.notify('Account created', 'alert-success', 3000);
          this.router.navigate(['/login']);
        })
        .catch((err) => {
          this.notify(err, 'alert-danger', 6000);
        })
  }


  notify(message, cssClass, timer) {
    this.flashMessage.show(message, {
      cssClass,
      timer
    });
  }

}
