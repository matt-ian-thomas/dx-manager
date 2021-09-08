import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {Icon} from './icon';
import {Menu} from './menu';

import {toggleDropDown} from '../ducks/actions';

class DataTable extends Component {
	static propTypes = {
		columns: PropTypes.arrayOf(PropTypes.string).isRequired,
		id: PropTypes.string.isRequired
	};
	constructor(props, context){
		super(props, context);
	}
	handleRowDropDownClick(index) {
		this.props.dispatch(toggleDropDown(this.props.id, index));
	}
	handleRowClick(event) {
		console.log(event.target);
	}
	renderColumn(column, index) {
		return (
			<th scope="col" key={index}>
				<div className="slds-truncate" title={column}>
					{column}
				</div>
			</th>
		);
	}
	renderRow(row, index) {
		let cells = [];
		this.props.columns.forEach((column, i) => {
			cells.push(<td key={i}>{row[column]}</td>)
		});
		cells.push(
			<td role="gridcell">
				<button onClick={this.handleRowDropDownClick.bind(this, index)} className="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small">
					<Icon category="utility" iconName="down" size="x-small"/>
				</button>
				{this.props.dropdown === index ? <Menu /> : undefined}
			</td>
		);
		return (
			<tr key={index} onClick={this.handleRowClick(index)}>
				{cells}
			</tr>
		);
	}
	render(){
		let {
			className,
			columns,
			data
		} = this.props;
		return (
			<table className={classNames('slds-table', 'slds-table_cell-buffer', 'slds-table_bordered')}>
				<thead>
					<tr className="slds-line-height_reset" >
						{columns.map(this.renderColumn)}
					</tr>
				</thead>
				<tbody>
					{data.map(this.renderRow.bind(this))}
				</tbody>
			</table>
		);
		
	}
}

export default connect((state, props) => ({
	dropdown: state.dropdowns[props.id]
}))(DataTable);