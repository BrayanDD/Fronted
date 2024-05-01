import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBibliotecaComponent } from './nav-biblioteca.component';

describe('NavBibliotecaComponent', () => {
  let component: NavBibliotecaComponent;
  let fixture: ComponentFixture<NavBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBibliotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
