import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
