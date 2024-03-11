import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDToggleViewComponent } from './best-d-toggle-view.component';

describe('BestDToggleViewComponent', () => {
  let component: BestDToggleViewComponent;
  let fixture: ComponentFixture<BestDToggleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDToggleViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestDToggleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
