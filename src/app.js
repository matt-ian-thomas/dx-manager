import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

//Component imports
import {Spinner} from './components/spinner';
import {DataTable} from './components/data-table';
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

				{orgs
					? <DataTable columns={['alias', 'username']} data={orgs.data.nonScratchOrgs}/>
					: undefined}
			</div>
		);
	}
}

export default connect(state => ({
	loading: state.loading,
	orgs: state.orgs
}))(App);