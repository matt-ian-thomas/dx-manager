import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

//Component imports
import {Button} from './components/button';

//Redux imports
import {
	applyBackground,
	changeInput
} from './ducks/actions';

class App extends Component {
	constructor(props, context){
		super(props, context);

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleInputChange(event) {
		this.props.dispatch(changeInput(event.target.value));
	}
	handleClick() {
		this.props.dispatch(applyBackground(this.props.backgroundColorValue));
	}
	render(){
		let {
			backgroundColor,
			backgroundColorValue
		} = this.props;
		return (
			<div className="slds" style={{backgroundColor}}>
				<input type="text" value={backgroundColorValue} onChange={this.handleInputChange} />
				<Button label="Apply Background Color" onClick={this.handleClick} variant="brand" />
			</div>
		);
	}
}

export default connect(state => ({
	backgroundColor: state.backgroundColor,
	backgroundColorValue: state.backgroundColorValue
}))(App);