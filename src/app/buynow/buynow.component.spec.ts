import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuynowComponent } from './buynow.component';

describe('BuynowComponent', () => {
  let component: BuynowComponent;
  let fixture: ComponentFixture<BuynowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuynowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuynowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
