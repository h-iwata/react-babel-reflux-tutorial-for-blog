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
    this.state = {
      memos: []
    }
  }

  componentDidMount(){
    this.setState({});
  }

  addMemo(memo){
    if (memo === '') {
      return;
    }
    this.state.memos.push(memo)
    this.setState({
      memos: this.state.memos
    })
  }

  render() {
    return (
      <ListGroup>
        {this.state.memos.map((memo, index) => {
          return <ListGroupItem key={index}>{memo}</ListGroupItem>
        })}
      </ListGroup>
    );
  }
}
export default ShowMemoListComponent;
