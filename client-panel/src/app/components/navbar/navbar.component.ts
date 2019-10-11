import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  userAutenticated = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.authService.isAutehticated()
        .subscribe((user) => {
          this.userAutenticated = user;
        })

  }

  logout() {
    this.authService.signOut()
        .then(() => this.router.navigate(['/login']))
  }

}
