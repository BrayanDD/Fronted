import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { BibliotecaComponent } from './biblioteca.component';

describe('BibliotecaComponent', () => {
  let component: BibliotecaComponent;
  let fixture: ComponentFixture<BibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaComponent ],
      providers: [ FormBuilder ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
