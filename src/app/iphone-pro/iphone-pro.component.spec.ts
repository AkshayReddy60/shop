import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneProComponent } from './iphone-pro.component';

describe('IphoneProComponent', () => {
  let component: IphoneProComponent;
  let fixture: ComponentFixture<IphoneProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IphoneProComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IphoneProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
