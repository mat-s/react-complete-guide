import React, { Component } from 'react';
import PropTypes from 'prop-types'

import WithClass from '../../../hoc/WithClass';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render () {
    console.log('[Person.js] rendering...');
    return (
      <WithClass classes={classes.Person}>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input type="text" ref={this.inputElementRef} onChange={this.props.changed} value={this.props.name} />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;