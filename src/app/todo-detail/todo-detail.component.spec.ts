import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  MatCardContent,
  MatCardModule,
  MatCardTitle,
} from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockDirectives, MockModule } from 'ng-mocks';
import { of } from 'rxjs';
import { State } from '../store/reducer';
import { TodoDetailComponent } from './todo-detail.component';

describe('TodoDetailComponent', () => {
  let component: TodoDetailComponent;
  let fixture: ComponentFixture<TodoDetailComponent>;
  let store: MockStore<State>;
  let mockTodosSelector;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        TodoDetailComponent,
        MockModule(MatCardModule),
        MockDirectives(MatCardContent, MatCardTitle),
      ],
      providers: [
        provideMockStore(),
        { provide: ActivatedRoute, useValue: { queryParams: of({ id: 1 }) } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TodoDetailComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the description', () => {
    component.todo$ = of({
      id: 1,
      title: 'title 1',
      isClosed: false,
      description: 'description 1',
    });
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css('mat-card-content')).nativeElement
        .innerText
    ).toEqual('description 1');
  });

  it('should display the placeholder description', () => {
    component.todo$ = of(undefined);
    fixture.detectChanges();
    expect(
      fixture.debugElement
        .query(By.css('mat-card-content'))
        .nativeElement.innerText.trim()
    ).toEqual(component.NO_DESCRIPTION);
  });
});
