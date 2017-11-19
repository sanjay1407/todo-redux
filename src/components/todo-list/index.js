import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { connect } from 'react-redux';

import Todo from '../todo';

const renderTodo = todo => <Todo key={todo.id} todo={todo} />;

const TodoList = props => (
    <div className='todo-list'>
        {props.todos.map(todo => renderTodo(todo))}
    </div>
);

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({ todos: _.values(state.todos) });

export default connect(mapStateToProps)(TodoList);
