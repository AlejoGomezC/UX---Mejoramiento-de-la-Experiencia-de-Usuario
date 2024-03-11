import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-best-d-semaforo-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './best-d-semaforo-item.component.html',
  styleUrl: './best-d-semaforo-item.component.scss'
})
export class BestDSemaforoItemComponent {

}
