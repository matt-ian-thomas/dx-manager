import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class DataTable extends Component {
	constructor(props, context){
		super(props, context);

		this.renderColumns = this.renderColumns.bind(this);
		this.renderData = this.renderData.bind(this);
	}
	renderColumns() {

	}
	renderData() {

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
						
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</table>
		);
		
	}
}