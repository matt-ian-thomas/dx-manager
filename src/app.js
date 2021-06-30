import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

//Component imports
import {Spinner} from './components/spinner';
import {DataTable} from './components/data-table';
import {Card} from './components/card';
import {Button} from './components/button';

//Redux imports
import {
	getOrgs,
	createOrg,
	showModal
} from './ducks/actions';

class App extends Component {
	constructor(props, context){
		super(props, context);

		this.handleCreateOrg = this.handleCreateOrg.bind(this);
	}
	componentDidMount() {
		getOrgs(this.props.dispatch);
	}
	handleCreateOrg() {
		this.props.dispatch(showModal('createOrg'));
	}
	render(){
		let {
			loading,
			modals,
			orgs
		} = this.props;
		return (
			<div className="slds">
				{loading
					? <Spinner />
					: undefined}
				{orgs
					? <div> 
						  <Card header="Non Scratch Orgs" iconName="archive" iconCategory="utility">
							  <DataTable columns={['alias', 'username']} data={orgs.data.nonScratchOrgs} />
						  </Card> 
						  <Card header="Scratch Orgs" iconName="archive" iconCategory="utility" buttons={<Button label="Create Scratch Org" variant="brand" onClick={this.handleCreateOrg}/>}>
							 <DataTable columns={['alias', 'username']} data={orgs.data.scratchOrgs} />
						  </Card>
					  </div>
					: undefined}
				{modals && modals.createOrg ? 'Create Org Modal' : undefined}
			</div>
		);
	}
}

export default connect(state => ({
	loading: state.loading,
	modals: state.modals,
	orgs: state.orgs
}))(App);