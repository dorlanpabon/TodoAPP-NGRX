import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ngrx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reduce';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todos.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
