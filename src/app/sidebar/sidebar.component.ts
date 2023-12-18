import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router) {}
  activeItem: string = 'dashboard'; // Variable to store the active item

  setActive(item: string): void {
    this.activeItem = item;
  }
}
