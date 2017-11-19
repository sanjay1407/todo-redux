export const CREATE_TODO = 'CREATE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const updateTodo = (text, id) => ({ type: UPDATE_TODO, text, id });

export const createTodo = text => ({ type: CREATE_TODO, text });

export const toggleTodo = id => ({ type: TOGGLE_TODO, id });

export const deleteTodo = id => ({ type: DELETE_TODO, id });

export const editTodo = id => ({ type: EDIT_TODO, id });
