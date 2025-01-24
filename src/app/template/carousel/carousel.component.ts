import { Component, Input } from '@angular/core';
import { Character } from '../../data/ModelCharacter';
import { CarouselModule,  } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-carousel',
  imports:[CarouselModule, ButtonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
    @Input() characters!: Character[];
}
