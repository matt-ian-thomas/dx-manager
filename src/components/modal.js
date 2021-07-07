import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Component imports
import {Button} from './button';
import {Icon} from './icon';

export class Modal extends Component {
	static propTypes = {
		buttons: PropTypes.arrayOf(PropTypes.instanceOf(Button)),
		handleClose: PropTypes.func.isRequired,
		header: PropTypes.string
	};
	constructor(props, context){
		super(props, context);

		this.handleClose = this.handleClose.bind(this);
	}
	handleClose() {
		this.props.handleClose();
	}
	render(){
		let {
			buttons,
			children,
			header,
			tagline
		} = this.props;
		return (
			<div>
				<section role="dialog" tabIndex="-1" className="slds-modal slds-fade-in-open">
					<div className="slds-modal__container">
						<header className="slds-modal__header">
							<Button className="slds-button_icon slds-modal__close slds-button_icon-inverse" label={<Icon category="utility" iconName="close" />} variant="neutral" onClick={this.handleClose} />
							<h2 className="slds-modal__title slds-hyphenate">{header}</h2>
							<p className="slds-m-top_x-small">{tagline}</p>
						</header>
						<div className="slds-modal__content slds-p-around_medium">
							{children}
						</div>
						<footer className="slds-modal__footer">
							<Button label="Cancel" variant="neutral" onClick={this.handleClose} />
							{buttons}
						</footer>
					</div>
				</section>
				<div className="slds-backdrop slds-backdrop_open"></div>
			</div>
		);
	}
}