import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucaoViewComponent } from './execucao-view.component';

describe('ExecucaoViewComponent', () => {
  let component: ExecucaoViewComponent;
  let fixture: ComponentFixture<ExecucaoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecucaoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecucaoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
