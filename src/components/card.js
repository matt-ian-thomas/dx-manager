import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {Icon} from './icon';
import {Button} from './button';

export class Card extends Component {
	static propTypes = {
		header: PropTypes.string.isRequired,
		buttons: PropTypes.array
	};
	constructor(props, context){
		super(props, context);
	}

	renderButtons(buttons) {
		let allButtons = [];
		buttons.forEach(button => {
			allButtons.push(<Button label={button.label} onClick={button.func} variant="neutral" />);
		});

		return allButtons;
	}

	render(){
		let {
			header,
			body,
			iconName,
			iconCategory,
			buttons
		} = this.props;

		let allButtons = buttons ? this.renderButtons(buttons) : undefined;
		return (
			<article class="slds-card">
				<div class="slds-card__header slds-grid">
					<header class="slds-media slds-media_center slds-has-flexi-truncate">
						<div class="slds-media__figure">
							<span class="slds-icon_container slds-icon-standard-account" title="account">
								<Icon iconName={iconName} category={iconCategory} />
								<span class="slds-assistive-text">{header}</span>
							</span>
						</div>
						<div class="slds-media__body">
							<h2 class="slds-card__header-title">
								<a href="#" class="slds-card__header-link slds-truncate" title="Accounts">
									<span>{header}</span>
								</a>
							</h2>
						</div>
						<div class="slds-no-flex">
						{allButtons ? 
							allButtons
							: undefined}
						</div>
					</header>
				</div>
				<div class="slds-card__body slds-card__body_inner">{body}</div>
			</article>
		);
	}
}