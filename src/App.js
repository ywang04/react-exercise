import React, { Component } from 'react'

import './App.css'

import Header from './header'
import Table from './table'

import getContacts from './data/get-contacts'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      contacts: [],
      nameFilter: '',
      stateFilter: '',
    }
  }

  componentDidMount() {
    getContacts()
      .then((response) => {
        this.setState({
          contacts: response
        })
      }).catch((error) => {
        console.log(error);
      })
  }

  onValueChange = (event) => {
    const name = event.target.name;
    const value = event.target.value.trim();
    this.setState({
      [name]: value
    })
  }

  renderStates = () => {
    const states = [...new Set(this.state.contacts.map(element => {
      const { address } = element.profile;
      if (address) {
        return address.state;
      }
    }))];
    const result = states.map((element, index) => {
      if (element) {
        return <option key={index} value={element}>{element}</option>
      }
    })
    return result;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Toolbar" >
          <label htmlFor="SearchByName">Search by name</label>
          <input id="SearchByName" type="text" name="nameFilter" value={this.state.nameFilter} onChange={(event) => this.onValueChange(event)}></input>
          <label htmlFor="SearchByState">Search by state</label>
          <select id="SearchByState" name="stateFilter" onChange={(event) => this.onValueChange(event)}>
            <option value="">all</option>
            {this.renderStates()}
          </select>
        </div>
        <Table contacts={this.state.contacts} nameFilter={this.state.nameFilter} stateFilter={this.state.stateFilter} />
      </div >
    )
  }
}

export default App
