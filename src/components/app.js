import './app.scss';
import React from 'react';
import TodoForm from './todo-form';
import TodoList from './todo-list';

export default () => (
    <div className='container'>
        <div className="title">
            <h1>TODO App !!!</h1>
        </div>
        <TodoForm />
        <TodoList />
    </div>
);
