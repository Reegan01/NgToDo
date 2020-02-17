import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from './store/todo/todo.reducer';
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoPageComponent, TodoWidgetComponent, TodoCreateFormUiComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer)
  ],
  exports: [TodoPageComponent, TodoWidgetComponent, TodoCreateFormUiComponent]
})
export class TodoModule { }
