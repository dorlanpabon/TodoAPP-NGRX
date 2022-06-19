import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { FiltroActions } from 'src/app/filtro/filtro.actions';
import { filtro } from 'src/app/filtro/filtro.actions';
import { borrarCompletados } from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: FiltroActions = 'todos';
  filtros: FiltroActions[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    //his.store.select('filtro').subscribe(filtro => this.filtroActual = filtro);
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  cambiarFiltro(filtroA: FiltroActions) {
    this.store.dispatch(filtro({ filtro: filtroA }));
  }

  borrarCompletados() {
    this.store.dispatch(borrarCompletados());
  }

}
