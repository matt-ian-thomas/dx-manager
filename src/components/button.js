import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Button extends Component {
	static propTypes = {
		disabled: PropTypes.bool,
		label: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
		stretch: PropTypes.bool,
		variant: PropTypes.oneOf(['neutral', 'brand', 'outline-brand', 'destructive', 'text-destructive', 'success']).isRequired,
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
			<button className={classNames('slds-button', `slds-button_${variant}`, { 'slds-button_stretch': stretch })} onClick={onClick} disabled={disabled}>
				{label}
			</button>
		);
		
	}
}