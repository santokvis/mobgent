import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrustratiesComponent } from './frustraties.component';

describe('FrustratiesComponent', () => {
  let component: FrustratiesComponent;
  let fixture: ComponentFixture<FrustratiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrustratiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrustratiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
