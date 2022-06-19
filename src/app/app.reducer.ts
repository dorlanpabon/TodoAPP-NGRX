import { Todo } from "./todos/models/todo.model";
import { ActionReducerMap } from "@ngrx/store";
import { todoReducer } from "./todos/todo.reduce";
import { FiltroActions } from "./filtro/filtro.actions";
import { filtroReducer } from "./filtro/filtro.reducer";

export interface AppState {
    todos: Todo[];
    filtro: FiltroActions
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}
