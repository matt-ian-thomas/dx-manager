import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {Icon} from './icon';

export class Button extends Component {
	static propTypes = {
		disabled: PropTypes.bool,
		label: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Icon)]).isRequired,
		onClick: PropTypes.func.isRequired,
		stretch: PropTypes.bool,
		variant: PropTypes.oneOf(['neutral', 'brand', 'outline-brand', 'destructive', 'text-destructive', 'success']),
	};
	constructor(props, context){
		super(props, context);
	}
	render(){
		let {
			className,
			disabled,
			label,
			onClick,
			variant,
			stretch
		} = this.props;
		return (
			<button className={classNames(className, 'slds-button', { 'slds-button_stretch': stretch, [`slds-button_${variant}`]: variant })} onClick={onClick} disabled={disabled}>
				{label}
			</button>
		);
		
	}
}