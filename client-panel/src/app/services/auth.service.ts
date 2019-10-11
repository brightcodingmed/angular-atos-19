import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAth: AngularFireAuth) { }

  register(email, password) {
    return this.afAth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email, password) {
    return this.afAth.auth.signInWithEmailAndPassword(email, password)
  }

  signOut() {
    return this.afAth.auth.signOut();
  }

  isAutehticated() {
    return this.afAth.user;
  }
}
