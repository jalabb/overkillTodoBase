import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class MockTodoApi implements InMemoryDbService {
  createDb(): {} {
    const todos: Todo[] = [
      { title: 'US1 - List my TODOs', isClosed: true },
      { title: 'US2 - change a TODO state', isClosed: true },
      { title: 'US3 - Detail a TODO', isClosed: false },
      { title: 'US4 - Add a new TODO', isClosed: false },
      { title: 'More - tests, CI?', isClosed: false },
    ];
    return { todos };
  }
}
