// Row Component goes here
import React, { Component } from 'react';

class Row extends Component {
  renderContacts = (arr) => {
    const result = arr.map((element) => {
      return this.iterateContacts(element);
    });
    return (
      result
    )
  }

  iterateContacts = (contact) => {
    return (
      <tr key={contact.id}>
        <td>{contact.firstName}</td>
        <td>{contact.email}</td>
        <td>{contact.profile.company}</td>
        <td>{contact.profile.address ? contact.profile.address.state : ''}</td>
      </tr>
    )
  }

  render() {
    const { contacts, stateFilter, nameFilter } = this.props;
    if (stateFilter) {
      const result = contacts.filter((contact) => {
        const state = contact.profile.address ? contact.profile.address.state : '';
        return state === stateFilter;
      });
      return this.renderContacts(result);
    }
    if (nameFilter) {
      const result = contacts.filter((contact) => {
        const fullName = `${contact.firstName} ${contact.lastName}`;
        return fullName === nameFilter;
      });
      return this.renderContacts(result);
    }
    else {
      return this.renderContacts(contacts);
    }
  }
}

export default Row;


