import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

//Component imports
import {Spinner} from './components/spinner';
import {DataTable} from './components/data-table';
import {Card} from './components/card';
import {Button} from './components/button';
import {Modal} from './components/modal';
import Input from './components/input';

//Redux imports
import {
	getOrgs,
	createOrg,
	hideModal,
	changeInput,
	showModal
} from './ducks/actions';

class App extends Component {
	constructor(props, context){
		super(props, context);

		this.handleCreateOrg = this.handleCreateOrg.bind(this);
		this.handleCloseCreateOrg = this.handleCloseCreateOrg.bind(this);
		this.handleSaveCreateOrg = this.handleSaveCreateOrg.bind(this);
	}
	componentDidMount() {
		getOrgs(this.props.dispatch);
	}
	handleCreateOrg() {
		this.props.dispatch(showModal('createOrg'));
	}
	handleCloseCreateOrg() {
		let {
			dispatch
		} = this.props
		dispatch(hideModal('createOrg'));
		dispatch(changeInput('alias', ''));
		dispatch(changeInput('duration', ''));
	}
	handleSaveCreateOrg() {
		let {
			dispatch,
			inputs
		} = this.props

		createOrg(dispatch, inputs.alias, inputs.duration);
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
						  <Card header="Scratch Orgs" iconName="archive" iconCategory="utility" buttons={[<Button key="1" label="Create Scratch Org" variant="brand" onClick={this.handleCreateOrg}/>]}>
							 <DataTable columns={['alias', 'username']} data={orgs.data.scratchOrgs} />
						  </Card>
					  </div>
					: undefined}
				{modals && modals.createOrg
					? <Modal header="Create Scratch Org" handleClose={this.handleCloseCreateOrg} buttons={[<Button key="1" label="Save" varient="brand" onClick={this.handleSaveCreateOrg}/>]}>
						<Input inputId="alias" label="Alias" type="text" />
						<Input inputId="duration" label="Duration" type="number" />
					  </Modal>
					: undefined}
			</div>
		);
	}
}

export default connect(state => ({
	inputs: state.inputs,
	loading: state.loading,
	modals: state.modals,
	orgs: state.orgs
}))(App);