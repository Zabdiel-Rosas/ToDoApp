import React, {Component} from 'react'

class Counter extends Component {

	constructor(props) {
		super(props)
		this.min = props.min
		this.max = props.max
		this.onChange = props.onChange
		this.state = {counter: 0}
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
	}

	increment() {
		if(this.state.counter === this.max) return
		this.setState({counter: this.state.counter + 1}, () => this.onChange(this.state.counter))
		
	}

	decrement() {
		if(this.state.counter === this.min) return
		this.setState({counter: this.state.counter - 1}, () => this.onChange(this.state.counter))
	}

	render() {
		return(
			<>
				<button className="plus" onClick={this.increment}>+</button>
				<h3>{this.state.counter}</h3>
				<button className="minus" onClick={this.decrement}>-</button>
			</>
		)
	}
}

export default Counter;