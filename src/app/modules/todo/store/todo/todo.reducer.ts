import { Todo } from '../../model/todo';
import { TodoActions, TodoActionTypes } from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number,
  todoList: Todo[]
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
}

export const todoReducer = (state: TodoState = initialState, action: TodoActions) => {
  switch(action.type) {
    case TodoActionTypes.crate:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false
          }
        ]
      }
    default:
      return state;
  }
};
