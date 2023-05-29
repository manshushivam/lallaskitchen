import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotiComponent } from './roti.component';

describe('RotiComponent', () => {
  let component: RotiComponent;
  let fixture: ComponentFixture<RotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
