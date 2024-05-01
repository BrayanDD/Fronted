import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexareaComponent } from './texarea.component';

describe('TexareaComponent', () => {
  let component: TexareaComponent;
  let fixture: ComponentFixture<TexareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
