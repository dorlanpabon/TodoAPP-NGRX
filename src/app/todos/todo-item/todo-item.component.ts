import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //obtener el elemento for todo-list
  @Input() todo: Todo = new Todo;

  //Control de edicion del texto del todo
  chkCompletado: FormControl = new FormControl;
  txtInput: FormControl = new FormControl;

  editando: boolean = false;

  @ViewChild('inputFisico') txtInputFisico: ElementRef = new ElementRef('inputFisico');


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(() => {
      this.store.dispatch(actions.toggle(this.todo));
    })
  }

  //permite editar el texto del todo
  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => { this.txtInputFisico.nativeElement.select(); }, 1);
  }

  //permite quitar la edicion del texto del todo
  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.texto) { return; }
    this.store.dispatch(actions.editar({ id: this.todo.id, texto: this.txtInput.value }));
  }

  borrar() {
    this.store.dispatch(actions.borrar(this.todo));
  }

}
