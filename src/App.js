import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './components/dropdown.js';

class App extends Component {
	state = {repeatedArray:new Array(0).fill(0)}
	addValue = ()=>{
		
	
	this.setState({repeatedArray:this.state.repeatedArray.concat(<li>{this.refs.toDoElement.value}</li>)});
	this.refs.toDoElement.value = "";
	};
		//console.log(this.refs.toDoElement)}
		
  render() {
    return (
	<div>
	<input type="text" ref = "toDoElement"></input>
	<button onClick={this.addValue}>Add To List</button> 
	{this.state.repeatedArray}
	</div>
    );
  }
}

export default App;
