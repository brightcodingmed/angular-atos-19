import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  };

  constructor(
       private authService: AuthService,
       private flashMessage: FlashMessagesService,
       private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user.email, this.user.password)
        .then(() => {

          this.flashMessage.show('you are logged ', {
            cssClass: 'alert-info',
            timer: 3000
          });

          this.router.navigate(['/']);
        })
        .catch((err) => {
          
          this.flashMessage.show(err, {
            cssClass: 'alert-warning',
            timer: 6000
          });
        })
  }

}
