import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Todo } from '../models/todo';
import { Store } from '@ngrx/store';
import { toggleTodo } from '../store/actions';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  baseUrl = `${environment.baseUrl}/api/todos/`;

  constructor(private http: HttpClient, private store: Store) {}

  list(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  createTodo(todo: Todo): Observable<Todo> {
    todo = { ...todo, dateModified: Date.now() };
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  editTodo(todo: Todo): Observable<Todo> {
    todo = { ...todo, dateModified: Date.now() };
        return this.http
      .put<Todo>(this.baseUrl + todo.id, todo)
      .pipe(tap(() => this.store.dispatch(toggleTodo({ todo }))));
  }
}
