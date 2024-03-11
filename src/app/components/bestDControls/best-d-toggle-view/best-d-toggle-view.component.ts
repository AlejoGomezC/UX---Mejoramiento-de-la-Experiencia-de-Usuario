import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-best-d-toggle-view',
  standalone: true,
  imports: [CommonModule, MatButtonToggleModule, MatButtonToggleGroup,
    MatIconModule],
  templateUrl: './best-d-toggle-view.component.html',
  styleUrl: './best-d-toggle-view.component.scss'
})
export class BestDToggleViewComponent {

}
