import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{
	render(){
		if (this.props.isLoading){
			return <h3> Loading... </h3>;
		}

		if (this.props.hasError) {
			return <h3> Error </h3>;
		}

		const todos = this.props.todos.map( todo=>
			<Todo 
				key = {todo.id} 
				{...todo} 
				setTodoStatus = {this.props.setTodoStatus}
			/>
		)

		return(
			<ul> { todos } </ul>
		);
	}
}

export default TodoList
