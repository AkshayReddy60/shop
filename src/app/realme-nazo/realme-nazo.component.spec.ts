import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmeNazoComponent } from './realme-nazo.component';

describe('RealmeNazoComponent', () => {
  let component: RealmeNazoComponent;
  let fixture: ComponentFixture<RealmeNazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealmeNazoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealmeNazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
