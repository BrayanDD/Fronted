import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAddComponent } from './select-add.component';

describe('SelectAddComponent', () => {
  let component: SelectAddComponent;
  let fixture: ComponentFixture<SelectAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
