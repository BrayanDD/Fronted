import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationsControlsComponent } from './paginations-controls.component';

describe('PaginationsControlsComponent', () => {
  let component: PaginationsControlsComponent;
  let fixture: ComponentFixture<PaginationsControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationsControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
