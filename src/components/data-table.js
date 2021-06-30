import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class DataTable extends Component {
	static propTypes = {
		columns: PropTypes.arrayOf(PropTypes.string).isRequired
	};
	constructor(props, context){
		super(props, context);
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
		return (
			<tr key={index}>
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
					<tr className="slds-line-height_reset">
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