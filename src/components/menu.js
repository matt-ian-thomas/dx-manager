import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Menu extends Component {
	constructor(props, context){
		super(props, context);
	}
	render(){
		let {
			category,
			iconName,
			size
		} = this.props;
		return (
			<div className="slds-dropdown slds-dropdown_left">
				<ul className="slds-dropdown__list" role="menu" aria-label="Show More">
					<li className="slds-dropdown__item" role="presentation">
						<a href="#" role="menuitem" tabindex="0">
							<span className="slds-truncate" title="Menu Item One">Delete</span>
						</a>
					</li>
				</ul>
			</div>
		);
		
	}
}