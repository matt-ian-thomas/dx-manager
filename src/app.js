import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

//Component imports
import {Spinner} from './components/spinner';
//Redux imports
import {
	getOrgs
} from './ducks/actions';

class App extends Component {
	constructor(props, context){
		super(props, context);
	}
	componentDidMount() {
		getOrgs(this.props.dispatch);
	}
	renderOrg(org) {
		return (
			<li>{org.alias}</li>
		);
	}
	render(){
		let {
			loading,
			orgs
		} = this.props;
		return (
			<div className="slds">
				{loading
					? <Spinner />
					: undefined}

				<ol>
					{orgs
						? orgs.data.nonScratchOrgs.map(this.renderOrg)
						: undefined}
				</ol>
			</div>
		);
	}
}

export default connect(state => ({
	loading: state.loading,
	orgs: state.orgs
}))(App);