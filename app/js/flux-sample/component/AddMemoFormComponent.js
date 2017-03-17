'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import parser from '../../common/utils/domParser';
import { Form, FormGroup, InputGroup, FormControl } from 'react-bootstrap';

class AddMemoFormComponent extends React.Component {

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
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){
    this.setState({

    });
  }

  handleOnClick(event) {
    parser.findComponentByName('Flux.ShowMemoListComponent').addMemo(ReactDOM.findDOMNode(this.textInput).value)
    parser.findComponentByName('Flux.ShowMemoSizeComponent').addMemo(ReactDOM.findDOMNode(this.textInput).value)
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" ref={(input) => this.textInput = input} />
            <InputGroup.Addon onClick={this.handleOnClick}>Add</InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}
export default AddMemoFormComponent;
