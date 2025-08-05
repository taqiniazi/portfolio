import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  yearsOfExperience: number;
  constructor() {
    const startYear = 2013; 
    const currentYear = new Date().getFullYear();
    this.yearsOfExperience = currentYear - startYear;
  }
}
