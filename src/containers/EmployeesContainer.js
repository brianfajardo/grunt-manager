import React, { Component } from 'react'
import { ListView } from 'react-native';
import { connect } from 'react-redux'
import { ListItem } from 'react-native-elements'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { employeesFetch } from '../actions/employeesActions'

class EmployeesContainer extends Component {

  componentWillMount() {
    this.props.employeesFetch()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  // Dynamically building DataSource and keeping it updated
  // via calls on componentWillMount & componentWillReceiveProps

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow(employees) {
    return <ListItem key={employees.uid} title={employees.name} />
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

// Transforming employeesList object into the employees array
const mapStateToProps = ({ employeesList }) => {
  const employees = _.map(employeesList, (val, uid) => ({ ...val, uid }))
  return { employees }
}

EmployeesContainer.propTypes = {
  employeesFetch: PropTypes.func.isRequired,
  employees: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    shift: PropTypes.string.isRequired
  }).isRequired
}

export default connect(mapStateToProps, { employeesFetch })(EmployeesContainer)