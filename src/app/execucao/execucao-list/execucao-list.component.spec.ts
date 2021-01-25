import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecucaoListComponent } from './execucao-list.component';

describe('ExecucaoListComponent', () => {
  let component: ExecucaoListComponent;
  let fixture: ComponentFixture<ExecucaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecucaoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecucaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
