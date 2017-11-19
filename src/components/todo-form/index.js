import './index.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTodo } from '../../actions/todo';

class TodoForm extends React.Component {

    static propTypes = {
        createTodo: PropTypes.func.isRequired
    };

    state = {
        text: ''
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.createTodo(this.state.text);
        this.setState({ text: '' });
    };

    onChange = event => {
        this.setState({ text: event.target.value });
    };

    render() {
        return (
            <div className='input-form'>
                <form onSubmit={this.onSubmit}>
                    <input className='todo-input'
                        type='text'
                        onChange={this.onChange}
                        value={this.state.text}
                        required
                        placeholder='Remind Me about..' />
                    <input className='todo-button'
                        type='submit' value='Add Todo' />
                </form>
            </div>
        );
    }

}

export default connect(null, { createTodo })(TodoForm);