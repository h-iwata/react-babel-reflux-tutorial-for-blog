'use strict';

import React from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';

class ShowMemoListComponent extends React.Component {

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
      <ListGroup>
        <ListGroupItem>Item 1</ListGroupItem>
        <ListGroupItem>Item 2</ListGroupItem>
        <ListGroupItem>...</ListGroupItem>
      </ListGroup>
    );
  }
}
export default ShowMemoListComponent;
