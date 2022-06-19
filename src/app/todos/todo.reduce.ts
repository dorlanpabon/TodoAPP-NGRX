import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "./models/todo.model";
import * as actions from "./todo.actions";

export const estadoInicial: Todo[] = [
    new Todo("Salvar al mundo"),
    new Todo("Tanos de la vida"),
    new Todo("Carro de la vida"),
];

const _todoReducer = createReducer(estadoInicial,
    on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(actions.toggle, (state, { id }) => state.map(todo => todo.id === id ? { ...todo, completado: !todo.completado } : todo)),
    on(actions.toggleAll, (state, { completado }) => state.map(todo => { return { ...todo, completado: completado } })),
    on(actions.editar, (state, { id, texto }) => state.map(todo => todo.id === id ? { ...todo, texto } : todo)),
    on(actions.borrar, (state, { id }) => state.filter(todo => todo.id !== id))
);

export function todoReducer(state: Todo[] = estadoInicial, action: Action) {
    return _todoReducer(state, action);
}