import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDSemaforoItemComponent } from './best-d-semaforo-item.component';

describe('BestDSemaforoItemComponent', () => {
  let component: BestDSemaforoItemComponent;
  let fixture: ComponentFixture<BestDSemaforoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDSemaforoItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestDSemaforoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
