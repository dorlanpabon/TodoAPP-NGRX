import { createAction, props } from '@ngrx/store';

export type FiltroActions = 'todos' | 'completados' | 'pendientes';

export const filtro = createAction(
    '[filtro] Filtro',
    props<{ filtro: FiltroActions }>()
);
