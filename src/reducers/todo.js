import { CREATE_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO ,UPDATE_TODO} from '../actions/todo';

const initialState = {
    1: { id: 1, text: 'Todo task 1', completed: false ,editable:false },
    2: { id: 2, text: 'Todo task 2', completed: false,editable:false },
    3: { id: 3, text: 'Todo task 3', completed: false,editable:false }
};

let id = 4;

const createTodo = text => ({ id: ++id, text, completed: false ,editable:false });

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO: {
            const todo = createTodo(action.text);
            return { ...state, [todo.id]: todo };
        }
        case TOGGLE_TODO: {
            const todo = state[action.id];
            return { ...state, [todo.id]: { ...todo, completed: !todo.completed } };
        }
        case DELETE_TODO: {
            const _state = { ...state };
            delete _state[action.id];
            return _state;
        }
        case EDIT_TODO: {
            const todo = state[action.id];
            return { ...state, [todo.id]: { ...todo, editable: true } }
        }
        case UPDATE_TODO: {
            const todo = state[action.id];
            return { ...state, [todo.id]: { ...todo, text:action.text, editable: false } }
        }
        default: {
            return state;
        }
    }
}