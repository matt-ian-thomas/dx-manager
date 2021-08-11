import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Spinner extends Component {
	constructor(props, context){
		super(props, context);
	}
	render(){
		return (
			<div>
				<div className="slds-spinner_container">
					<div role="status" className="slds-spinner slds-spinner_medium">
						<div className="slds-spinner__dot-a"></div>
						<div className="slds-spinner__dot-b"></div>
					</div>
				</div>	
			</div>
		);
		
	}
}