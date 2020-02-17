import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  crate = '[TODO] Create Todo item'
}

export class TodoCreateAction implements Action {
  readonly type: string = TodoActionTypes.crate;

  constructor(public payload: {name: string}) {
    console.log('ACTION , ' + TodoActionTypes.crate);
  }

}

export type TodoActions = TodoCreateAction;
