import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBibliotecaComponent } from './general-biblioteca.component';

describe('GeneralBibliotecaComponent', () => {
  let component: GeneralBibliotecaComponent;
  let fixture: ComponentFixture<GeneralBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralBibliotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
