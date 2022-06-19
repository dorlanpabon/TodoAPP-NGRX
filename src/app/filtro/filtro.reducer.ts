import { createReducer, on, Action } from '@ngrx/store';
import { Todo } from '../todos/models/todo.model';
import * as actions from './filtro.actions';
import { FiltroActions } from './filtro.actions';
//importar actions
//cambiar initial state
export const estadoInicial: FiltroActions = 'todos';
//asignar actions
const _filtroReducer = createReducer<FiltroActions, Action>(
    estadoInicial,
    on(actions.filtro, (state, { filtro }) => filtro)
);
export function filtroReducer(state: FiltroActions = estadoInicial, action: Action) {
    return _filtroReducer(state, action);
}