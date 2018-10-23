// Table Component goes here
import React, { Component } from 'react';
import Row from './row';

class Table extends Component {
  render() {
    const { contacts, stateFilter, nameFilter } = this.props;
    return (
      <table className="Table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <Row contacts={contacts} stateFilter={stateFilter} nameFilter={nameFilter} />
        </tbody>
      </table>
    )
  }
}

export default Table;