import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { first } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Todo } from '../models/todo';
import { State } from '../store/reducer';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;
  let store: MockStore<State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore()],
    });
    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list todos', (done: DoneFn) => {
    const mockedTodoList: Todo[] = [
      { id: 1, title: 'todoTitle', isClosed: true },
    ];

    service
      .list()
      .pipe(first())
      .subscribe((res: Todo[]) => {
        expect(res).toEqual(mockedTodoList);
        done();
      }, done.fail);

    const req = httpMock.expectOne(
      (r) => r.url === `${environment.baseUrl}/api/todos/`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(mockedTodoList);
  });
});
