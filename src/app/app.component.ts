import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./commons/header/header.component";
import { SidebarComponent } from "./commons/sidebar/sidebar.component";
import { ExperienceComponent } from "./experience/experience.component";
import { RecentProjectsComponent } from "./recent-projects/recent-projects.component";
import { ServicesMainComponent } from "./services-main/services-main.component";
import { LayoutsComponent } from "./layouts/layouts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, ExperienceComponent, RecentProjectsComponent, ServicesMainComponent, LayoutsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
