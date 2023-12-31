import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent {
  constructor(private router: Router) {}


  signUp(event: Event) {
    
    event.preventDefault();
    this.router.navigate(['/signup']);
  }

}
