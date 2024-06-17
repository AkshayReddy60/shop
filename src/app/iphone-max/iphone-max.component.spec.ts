import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneMaxComponent } from './iphone-max.component';

describe('IphoneMaxComponent', () => {
  let component: IphoneMaxComponent;
  let fixture: ComponentFixture<IphoneMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IphoneMaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IphoneMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
