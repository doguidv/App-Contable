import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayoresComponent } from './mayores.component';

describe('MayoresComponent', () => {
  let component: MayoresComponent;
  let fixture: ComponentFixture<MayoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MayoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
