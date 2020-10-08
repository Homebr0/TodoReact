import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            background: 'f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    markComplete(e) {
        console.log(this.props)
    }


    render() {
        const { id, title } = this.props.todo;
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)}  style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}



Todoitem.propTypes = {
    todo: PropTypes.array.isRequired
}

const btnStyle = {
    background: '#d1002a',
    color: '#fff',
    padding: '4px 7px',
    border: '50%',
    cursor: 'pointer',
    float: 'right'

}



export default Todoitem
