import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

//Component imports
import {Spinner} from './components/spinner';
import {DataTable} from './components/data-table';
import {Card} from './components/card';
//Redux imports
import {
	getOrgs,
	createOrg
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
		let nonScratchOrgBody = orgs ? <DataTable columns={['alias', 'username']} data={orgs.data.nonScratchOrgs} /> : undefined;
		let scratchOrgBody = orgs ? <DataTable columns={['alias', 'username', 'expirationDate']} data={orgs.data.scratchOrgs} /> : undefined;
		let newScratchOrgButton = {
			label: "New Scratch Org",
			func: createOrg({ name:"testTitle"})
		};
		return (
			<div className="slds">
				{loading
					? <Spinner />
					: undefined}

				{orgs
					? <Card header="Non Scratch Orgs" body={nonScratchOrgBody} iconName="archive" iconCategory="utility" /> 
					: undefined}

				{orgs
					? <Card header="Scratch Orgs" body={scratchOrgBody} iconName="archive" iconCategory="utility" buttons={[newScratchOrgButton]} /> 
					: undefined}

			</div>
		);
	}
}

export default connect(state => ({
	loading: state.loading,
	orgs: state.orgs
}))(App);