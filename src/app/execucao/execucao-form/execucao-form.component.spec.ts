import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucaoFormComponent } from './execucao-form.component';

describe('ExecucaoFormComponent', () => {
  let component: ExecucaoFormComponent;
  let fixture: ComponentFixture<ExecucaoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecucaoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecucaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
