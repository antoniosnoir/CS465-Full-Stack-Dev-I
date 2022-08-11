import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication'; //./services/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }
  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

}