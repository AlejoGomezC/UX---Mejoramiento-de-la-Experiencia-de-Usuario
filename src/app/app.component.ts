import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BestDGridComponent } from './components/best-d-grid/best-d-grid.component';
import { BestDItemComponent } from './components/best-d-item/best-d-item.component';
import { BestDNoticiasComponent } from './components/best-d-noticias/best-d-noticias.component';
import { BestDNoticiasItemComponent } from './components/best-d-noticias-item/best-d-noticias-item.component';
import { BestDSemaforoComponent } from './components/best-d-semaforo/best-d-semaforo.component';
import { BestDSemaforoItemComponent } from './components/best-d-semaforo-item/best-d-semaforo-item.component';
import { BestDToggleViewComponent } from './components/bestDControls/best-d-toggle-view/best-d-toggle-view.component';



import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, DashboardComponent,
    BestDGridComponent, BestDItemComponent, BestDNoticiasComponent, BestDNoticiasItemComponent,
    BestDSemaforoComponent, BestDSemaforoItemComponent, BestDToggleViewComponent, MatToolbarModule,
    MatCardModule, MatIconModule, MatExpansionModule, MatButtonToggleModule,
    MatButtonToggleGroup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bestDoc';




}
