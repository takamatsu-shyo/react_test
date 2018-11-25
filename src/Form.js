import React, { Component } from 'react'
import './css/form.css'

class Form extends Component{
	render(){
		return(
		<div className="form">
		<form onSubmit = {this.props.handleSubmit}>
			<input name="title" type="text" placeholder="Title" defaultValue="Go to coffee shop" /><br/>
			<textarea name="desc" placeholder="Explanation" defaultValue="taste chocolate or coke"></textarea><br/>
			<button type="submit">Create a todo</button>
		</form>
		</div>	
		)
	}
}

export default Form
