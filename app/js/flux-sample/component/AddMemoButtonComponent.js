'use strict';

import React from 'react';

import { Form, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class AddMemoButtonComponent extends React.Component {

  static get propTypes() {
    return {

    };
  }

  static get defaultProps() {
    return {

    }
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.setState({

    });
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" />
            <InputGroup.Addon>Add</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}
export default AddMemoButtonComponent;
