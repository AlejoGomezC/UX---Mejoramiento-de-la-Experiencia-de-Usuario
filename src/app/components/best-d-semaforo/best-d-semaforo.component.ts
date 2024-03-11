import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestDSemaforoItemComponent } from '../best-d-semaforo-item/best-d-semaforo-item.component';

@Component({
  selector: 'app-best-d-semaforo',
  standalone: true,
  imports: [CommonModule, BestDSemaforoItemComponent],
  templateUrl: './best-d-semaforo.component.html',
  styleUrl: './best-d-semaforo.component.scss'
})
export class BestDSemaforoComponent {

}
