import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) card_title!: string;
  @Input({ required: true }) card_image!: string;
  @Input({ required: true }) button_title!: string;
  @Input({ required: true }) button_route!: string;
}
