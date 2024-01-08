import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioCerratoComponent } from './iniciar-sessio-cerrato.component';

describe('IniciarSessioCerratoComponent', () => {
  let component: IniciarSessioCerratoComponent;
  let fixture: ComponentFixture<IniciarSessioCerratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioCerratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioCerratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
