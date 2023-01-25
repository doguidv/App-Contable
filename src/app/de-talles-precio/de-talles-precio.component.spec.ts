import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeTallesPrecioComponent } from './de-talles-precio.component';

describe('DeTallesPrecioComponent', () => {
  let component: DeTallesPrecioComponent;
  let fixture: ComponentFixture<DeTallesPrecioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeTallesPrecioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeTallesPrecioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
