import { Action, createReducer, on, State } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import { crear } from "./todo.actions";

export const estadoInicial: Todo[] = [];

const _todoReducer = createReducer(estadoInicial,
    on(crear, (state, { texto }) => [...state, new Todo(texto)])
);

export function todoReducer(state: Todo[] = estadoInicial, action: Action) {
    return _todoReducer(state, action);
}