import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class MockTodoApi implements InMemoryDbService {
  createDb(): {} {
    const todos: Todo[] = [
      { id: 1, title: 'US1 - List my TODOs', isClosed: true },
      { id: 2, title: 'US2 - change a TODO state', isClosed: true },
      {
        id: 3,
        title: 'US3 - Detail a TODO',
        description: 'This TODO has an optional description',
        isClosed: false,
      },
      { id: 4, title: 'US4 - Add a new TODO', isClosed: false },
      { id: 5, title: 'More - tests, CI?', isClosed: false },
    ];
    return { todos };
  }
}
