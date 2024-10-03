import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';

export const routes: Routes = [
    { path: '', component: LayoutsComponent},
    { path: 'projects', component: ProjectsListComponent }
];
