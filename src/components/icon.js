import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class Icon extends Component {
	static propTypes = {
		category: PropTypes.oneOf(['standard', 'utility']).isRequired,
		iconName: PropTypes.string.isRequired
	};
	constructor(props, context){
		super(props, context);
	}
	render(){
		let {
			category,
			iconName
		} = this.props;
		return (
			<span className={classNames('slds-icon_container', `slds-icon-${category}-${iconName}`)}>
				<svg className={classNames('slds-icon', 'slds-icon-text-default')}>
					<use xlinkHref={`/slds/icons/${category}-sprite/svg/symbols.svg#${iconName}`}></use>
				</svg>
			</span>
		);
		
	}
}