import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedEmergenteComponent } from './created-emergente.component';

describe('CreatedEmergenteComponent', () => {
  let component: CreatedEmergenteComponent;
  let fixture: ComponentFixture<CreatedEmergenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedEmergenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedEmergenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
