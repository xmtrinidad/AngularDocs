import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-firebase-auth-tutorial',
  templateUrl: './firebase-auth-tutorial.component.html',
  styleUrls: ['./firebase-auth-tutorial.component.scss']
})
export class FirebaseAuthTutorialComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

}
