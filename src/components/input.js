import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {changeInput} from '../ducks/actions';


class Input extends Component {
	static propTypes = {
        inputId: PropTypes.string.isRequired,
        isRequired: PropTypes.bool,
        label: PropTypes.string,
        type: PropTypes.oneOf(['text', 'number', 'email']).isRequired
	};
	constructor(props, context){
		super(props, context);
        this.handleChange = this.handleChange.bind(this);
	}

    handleChange(event){
        let {
            dispatch,
            inputId
        } = this.props;
        dispatch(changeInput(inputId, event.target.value));
    }

	render(){
		let {
            isRequired,
            label,
            type,
            value
		} = this.props;
		return (
            <div className="slds-form-element">
                <label className="slds-form-element__label">
                    {label}
                </label>
                <div className="slds-form-element__control">
                    <input type={type} value={value} className="slds-input" onChange={this.handleChange} required={isRequired} />
                </div>
            </div>
        );
	}
}

export default connect((state, props) => ({
    value: state.inputs[props.inputId]
}))(Input);