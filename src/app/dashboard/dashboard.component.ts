import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestDGridComponent } from '../components/best-d-grid/best-d-grid.component';
import { BestDSemaforoComponent } from '../components/best-d-semaforo/best-d-semaforo.component';
import { BestDNoticiasComponent } from '../components/best-d-noticias/best-d-noticias.component';
import { BestDToggleViewComponent } from '../components/bestDControls/best-d-toggle-view/best-d-toggle-view.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BestDGridComponent, BestDSemaforoComponent,
    BestDNoticiasComponent, BestDToggleViewComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

}
