import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistetionComponent } from './registetion.component';

describe('RegistetionComponent', () => {
  let component: RegistetionComponent;
  let fixture: ComponentFixture<RegistetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistetionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
