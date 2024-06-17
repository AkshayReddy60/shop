import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iphone15Component } from './iphone-15.component';

describe('Iphone15Component', () => {
  let component: Iphone15Component;
  let fixture: ComponentFixture<Iphone15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Iphone15Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Iphone15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
