import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {

  menuOptions =[
    { label: 'Home', route: '/home' },
    { label: 'Counter', route: '/counter' },
    { label: 'Structural directives', route: '/strutural-directives' },
    { label: 'Data Binding', route: '/data-binding' },
    { label: 'Attribute Directives', route: '/attribute-directives' },
    { label: 'Service', route: '/service' },
    { label: 'Examen', route: '/utvt' },
    { label: 'Pipes', route: '/pipes' },
  ];

}
