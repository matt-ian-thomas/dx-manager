import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

class App extends Component {
	constructor(props, context){
		super(props, context);
	}
	render(){
		return (
			<div>
				Hello {this.props.name}!
			</div>
		);
	}
}

export default connect(state => ({

}))(App);