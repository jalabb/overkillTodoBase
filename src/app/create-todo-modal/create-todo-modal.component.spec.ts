import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CreateTodoModalComponent } from './create-todo-modal.component';

describe('CreateTodoModalComponent', () => {
  let component: CreateTodoModalComponent;
  let fixture: ComponentFixture<CreateTodoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTodoModalComponent, MatDialogModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        provideAnimations(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTodoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
