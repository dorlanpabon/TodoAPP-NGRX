import { Pipe, PipeTransform } from '@angular/core';
import { FiltroActions } from '../filtro/filtro.actions';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Todo[], filtro: FiltroActions): Todo[] {
    switch (filtro) {
      case 'completados':
        return value.filter(todo => todo.completado);
      case 'pendientes':
        return value.filter(todo => !todo.completado);
      default:
        value
    }
    return value;
  }

}
