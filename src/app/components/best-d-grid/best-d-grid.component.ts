import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BestDItemComponent } from '../best-d-item/best-d-item.component';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-best-d-grid',
  standalone: true,
  imports: [CommonModule, MatCardModule, BestDItemComponent],
  templateUrl: './best-d-grid.component.html',
  styleUrl: './best-d-grid.component.scss'
})
export class BestDGridComponent {
  constructor() { }

}
