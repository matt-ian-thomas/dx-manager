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
	renderColumn(column) {
		return (
			<th scope="col">
				<div className="slds-truncate" title={column}>
					{column}
				</div>
			</th>
		);
	}
	renderRow(row) {
		let cells = [];
		this.props.columns.forEach(column => {
			cells.push(<td>{row[column]}</td>)
		});
		return (
			<tr>
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
					{data.map(this.renderRow.bind)}
				</tbody>
			</table>
		);
		
	}
}