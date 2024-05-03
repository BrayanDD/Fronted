import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexAreaComponent } from './tex-area.component';

describe('TexAreaComponent', () => {
  let component: TexAreaComponent;
  let fixture: ComponentFixture<TexAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
