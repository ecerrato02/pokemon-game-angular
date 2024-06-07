import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsessioCerratoComponent } from './isessio-cerrato.component';

describe('IsessioCerratoComponent', () => {
  let component: IsessioCerratoComponent;
  let fixture: ComponentFixture<IsessioCerratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsessioCerratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsessioCerratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
