import { Component } from '@angular/core';
import { SidebarComponent } from '../commons/sidebar/sidebar.component';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  projectsList:projectList[] = [
    {
      title:"Payzen",
      img:"assets/img/projects/payzen.png",
      url:"https://payzen.pk/",
      info:"Frontend Development"
    },
    {
      title:"Global Certification",
      img:"assets/img/projects/project-1.png",
      url:"https://certifications.pitb.gov.pk",
      info:"Frontend Development"
    },
    {
      title:"Driving License Managemenet System",
      img:"assets/img/projects/project-2.png",
      url:"https://dlims.punjab.gov.pk/",
      info:"Frontend Development"
    },
    {
      title:"SS Japan Car",
      img:"assets/img/projects/sscars.jpg",
      url:"sscars",
      info:"Frontend Development"
    },
    {
      title:"ePay System",
      img:"assets/img/projects/project-4.png",
      url:"https://epay.punjab.gov.pk/",
      info:"Angular Frontend Development"
    },
    {
      title:"Jan Japan",
      img:"assets/img/projects/project-3.png",
      url:"https://janjapan.com/",
      info:"Frontend Development"
    },
    {
      title:"Evolve Machine Learners",
      img:"assets/img/projects/evolvemachinelearners.jpg",
      url:"https://www.evolvemachinelearners.com/",
      info:"Frontend Development"
    },
    {
      title:"Shifaam",
      img:"assets/img/projects/shifaam.jpg  ",
      url:"https://www.shifaam.com",
      info:"Frontend Development"
    },
    {
      title:"Hanna Capital",
      img:"assets/img/projects/hannacapital.jpg",
      url:"https://www.hannacapitalllc.com/",
      info:"Frontend Development"
    },
    {
      title:"British Hair & Nails Society",
      img:"assets/img/projects/bhns.png",
      url:"https://bhns.org.uk/",
      info:"Invision CMS"
    },
    {
      title:"Pathology Spheres",
      img:"assets/img/projects/pathologysphare.png",
      url:"https://pathologyspheres.com/",
      info:"Invision CMS"
    },
    {
      title:"Dermpath Pro",
      img:"assets/img/projects/dermpathpro.png",
      url:"https://dermpathpro.com/",
      info:"Invision CMS"
    },
    {
      title:"Cars4U",
      img:"assets/img/projects/cars4ufzco.jpg",
      url:"https://www.cars4ufzco.com/",
      info:"Frontend Development"
    }
  ]
  ngOnInit(): void {
  }
}
interface projectList{
    title:string,
    img:string,
    url:string,
    info:string
}