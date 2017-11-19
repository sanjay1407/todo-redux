import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTodo, deleteTodo, editTodo, updateTodo } from '../../actions/todo';

const getToggleIcon = (todo, toggleTodo) => todo.completed
    ? <a href="#"><i className="fa fa-check-square-o" onClick={() => toggleTodo(todo.id)}></i></a>
    : <a href="#"><i className="fa fa-square-o" onClick={() => toggleTodo(todo.id)}></i></a>;

const getDeleteIcon = (todo, deleteTodo) => (
    <a href="#">
        <i className="fa fa-trash fa-2x" onClick={() => deleteTodo(todo.id)}>
        </i>
    </a>
);

const getEditIcon = (todo, editTodo) => (
    <a href="#">
        <i className="fa fa-edit fa-2x" onClick={() => editTodo(todo.id)}>
        </i>
    </a>
);

const saveChanges = (todo, updateTodo, event) => {
    const updatedText = event.target.value;
    updateTodo(updatedText, todo.id);
}

const Todo = ({ todo, toggleTodo, deleteTodo, editTodo, updateTodo }) => {
    const editable = todo.editable;
    const completedClass = todo.completed ? 'completed' : 'not-completed';
    const editableClass = !editable ? 'todo-text' : 'editable';
    let task = editable ? event.target.value : todo.text;
    return (
        <li>
            <div className={'todo-container ' + completedClass+' pos-rel'}>
                {getToggleIcon(todo, toggleTodo)}
                <input className={`${completedClass} ${editableClass}`}
                    type="text"
                    onBlur={(event) => saveChanges(todo, updateTodo, event)}
                    value={task}
                    disabled={!editable} />
                <span className='edit-icon'>{getEditIcon(todo, editTodo)}</span>
                <span className='delete-icon'>{getDeleteIcon(todo, deleteTodo)}</span>
            </div>
        </li>
    );
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleTodo,
        deleteTodo,
        editTodo,
        updateTodo
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(Todo);