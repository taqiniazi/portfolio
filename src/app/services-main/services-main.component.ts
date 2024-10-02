import { Component } from '@angular/core';

@Component({
  selector: 'app-services-main',
  standalone: true,
  imports: [],
  templateUrl: './services-main.component.html',
  styleUrl: './services-main.component.scss'
})
export class ServicesMainComponent {
  myservices:services[]=[
    {
      title:"UI/UX Design",
      icon:"assets/img/icons/ui-ux.svg"
    },
    {
      title:"Figma/PSD to HTML",
      icon:"assets/img/icons/figma_html.svg"
    },
    {
      title:"Web Development",
      icon:"assets/img/icons/prd-design.svg"
    },
    {
      title:"Responsive Design",
      icon:"assets/img/icons/responsive.svg"
    },
    {
      title:"Semantic Markup",
      icon:"assets/img/icons/semantic_markup.svg"
    },
    {
      title:"Integration",
      icon:"assets/img/icons/integration.svg"
    },
    {
      title:"Email Templating ",
      icon:"assets/img/icons/email_templating.svg"
    },
    {
      title:"Team Management ",
      icon:"assets/img/icons/team_management.svg"
    }
  ]
}

interface services{
  title:string,
  icon:string
}
