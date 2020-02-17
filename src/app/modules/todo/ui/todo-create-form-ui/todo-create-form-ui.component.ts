import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCreateFormUiComponent implements OnInit {

  name = '';

  @Output()
  create = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreate(event) {
    if(this.name) {
      this.create.emit(this.name);
      this.name = '';
    }
  }

}
