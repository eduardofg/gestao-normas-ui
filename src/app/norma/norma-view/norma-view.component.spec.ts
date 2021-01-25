import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaViewComponent } from './norma-view.component';

describe('NormaViewComponent', () => {
  let component: NormaViewComponent;
  let fixture: ComponentFixture<NormaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
