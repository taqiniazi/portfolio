import { Component } from '@angular/core';
import { ExperienceComponent } from "../experience/experience.component";
import { RecentProjectsComponent } from "../recent-projects/recent-projects.component";
import { ServicesMainComponent } from "../services-main/services-main.component";
import { SidebarComponent } from "../commons/sidebar/sidebar.component";

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [ExperienceComponent, RecentProjectsComponent, ServicesMainComponent, SidebarComponent],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {

}
