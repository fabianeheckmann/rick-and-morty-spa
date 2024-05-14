import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})



export class SidenavComponent {

  constructor(
    private router: Router
  ) { }

  collapsed = false;
  navData = navbarData;


  goCharacters() {
    this.router.navigate(['/characters']);
}

  toggleColapsed(): void {
    this.collapsed = !this.collapsed;
  }

  closeSidenav(): void {
    this.collapsed = false;
  }
}
