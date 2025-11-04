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
      { id: 2, title: 'US2 - Change a TODO state', isClosed: true },
      {
        id: 3,
        title: 'US3 - View TODO details',
        description:
          'As a user I would like to display one of my todo in a separate or dedicated view. This todo will contain its title and a description (which is a new information not shown in the previous view).',
        isClosed: false,
      },
      {
        id: 4,
        title: 'US4 - Add a new TODO',
        description: 'As a user I would like to add a new todo in my list',
        isClosed: false,
      },
      { id: 5, title: 'More - tests, CI?', isClosed: false },
    ];
    return { todos };
  }
}
