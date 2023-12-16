import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent {
  constructor(private router: Router) {}

  Dashboard(){
    
    this.router.navigate(['/dashboard'])
  }
  signIn(event: Event) {
    event.preventDefault();
    this.router.navigate(['/signin']);
  }
}
