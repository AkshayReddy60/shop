import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneComponent } from './iphone.component';

describe('IphoneComponent', () => {
  let component: IphoneComponent;
  let fixture: ComponentFixture<IphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IphoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
