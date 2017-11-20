import './app.scss';
import React from 'react';
import TodoForm from './todo-form';
import TodoList from './todo-list';

export default () => (
    <div className='container'>
        <h1 className='title'>Todo Application</h1>
        <TodoForm />
        <TodoList />
    </div>
);
