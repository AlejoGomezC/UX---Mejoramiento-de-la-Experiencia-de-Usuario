import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestDNoticiasItemComponent } from '../best-d-noticias-item/best-d-noticias-item.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-best-d-noticias',
  standalone: true,
  imports: [CommonModule, BestDNoticiasItemComponent, MatExpansionModule, MatIconModule],
  templateUrl: './best-d-noticias.component.html',
  styleUrl: './best-d-noticias.component.scss'
})
export class BestDNoticiasComponent {

}
