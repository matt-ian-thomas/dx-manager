import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

//Component imports
import {Icon} from './components/icon';

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
			<div className="slds">
				<Icon category="standard" iconName="bot"></Icon>
				<Icon category="not-a-category" iconName="account"></Icon>
			</div>
		);
	}
}

export default connect(state => ({
	backgroundColor: state.backgroundColor,
	backgroundColorValue: state.backgroundColorValue
}))(App);