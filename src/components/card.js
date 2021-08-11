import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {Icon} from './icon';
import {Button} from './button';
import {Spinner} from './spinner';

export class Card extends Component {
	static propTypes = {
		header: PropTypes.string.isRequired,
		buttons: PropTypes.array
	};
	constructor(props, context){
		super(props, context);
	}
	render(){
		let {
			header,
			children,
			iconName,
			iconCategory,
			buttons,
			loading
		} = this.props;

		return (
			<article className="slds-card">
				{loading ? <Spinner /> : undefined}
				<div className="slds-card__header slds-grid">
					<header className="slds-media slds-media_center slds-has-flexi-truncate">
						<div className="slds-media__figure">
							<span className="slds-icon_container slds-icon-standard-account">
								<Icon iconName={iconName} category={iconCategory} />
								<span className="slds-assistive-text">{header}</span>
							</span>
						</div>
						<div className="slds-media__body">
							<h2 className="slds-card__header-title">
								<a href="#" className="slds-card__header-link slds-truncate">
									<span>{header}</span>
								</a>
							</h2>
						</div>
						{buttons
							? <div className="slds-no-flex">
								{buttons}
							  </div>
							: undefined}
					</header>
				</div>
				<div className="slds-card__body slds-card__body_inner">{children}</div>
			</article>
		);
	}
}