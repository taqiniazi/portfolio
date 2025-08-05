import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experience:experience[]=[
    {
      comp_name:"Punjab Information Technology Board",
      designation:"Sr. Software Engineer - Frontend Lead",
      from_date:"Aug 2020",
      to_date:"Present"
    },
    {
      comp_name:"Punjab Information Technology Board",
      designation:"Sr. Frontend Developer",
      from_date:"Aug 2016",
      to_date:"Feb 2020"
    },
    {
      comp_name:"Jan Japan Support Center",
      designation:"Sr. Frontend Developer",
      from_date:"May 2015",
      to_date:"Aug 2016"
    },
    {
      comp_name:"Gol Technologies",
      designation:"Frontend UI/UX Developer",
      from_date:"Mar 2014",
      to_date:"May 2015"
    },
    {
      comp_name:"Aim Solutions",
      designation:"HTML Developer",
      from_date:"Oct 2013",
      to_date:"May 2014"
    }
  ]
  expertarea:expertarea[]=[
    {
      title:"HTML",
      icon:"assets/img/icons/html.svg"
    },
    {
      title:"CSS",
      icon:"assets/img/icons/css.svg"
    },
    {
      title:"SCSS",
      icon:"assets/img/icons/scss.svg"
    },
    {
      title:"Bootstrap",
      icon:"assets/img/icons/bootstrap.svg"
    },
    {
      title:"Tailwind",
      icon:"assets/img/icons/tailwind.svg"
    },
    {
      title:"Javascript",
      icon:"assets/img/icons/javascript.svg"
    },
    {
      title:"jQuery",
      icon:"assets/img/icons/jquery.svg"
    },
    {
      title:"Angular",
      icon:"assets/img/icons/angular.svg"
    },
    {
      title:"Invision CMS",
      icon:"assets/img/icons/invision.svg"
    }
  ]
}
interface experience{
  comp_name:string,
  designation:string,
  from_date:string,
  to_date:string
}
interface expertarea{
  title:string,
  icon:string
}
