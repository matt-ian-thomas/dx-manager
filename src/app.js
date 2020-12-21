import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

//Component imports
import {Button} from './components/button';

class App extends Component {
	constructor(props, context){
		super(props, context);
	}
	render(){
		return (
			<div className="slds">
				<Button label="Click me" variant="not" />
			</div>
		);
	}
}

export default connect(state => ({

}))(App);