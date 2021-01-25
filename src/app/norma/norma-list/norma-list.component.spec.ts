import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaListComponent } from './norma-list.component';

describe('NormaListComponent', () => {
  let component: NormaListComponent;
  let fixture: ComponentFixture<NormaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
