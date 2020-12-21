import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Button extends Component {
	static propTypes = {
		variant: PropTypes.oneOf(['neutral', 'brand', 'outline-brand', 'destructive', 'text-destructive', 'success'])
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
			variant
		} = this.props;
		return (
			<button className={classNames('slds-button', `slds-button_${variant}`)}>
				{label}
			</button>
		);
	}
}