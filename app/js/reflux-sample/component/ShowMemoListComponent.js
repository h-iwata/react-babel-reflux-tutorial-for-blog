'use strict';

import React from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';

import ReactMixin from 'react-mixin';
import Reflux from 'reflux';
import MemoStore from '../stores/MemoStore';

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
    this.setState({

    });
  }

  onMemoChanged(memos) {
    this.setState({
      memos: memos
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
ReactMixin(ShowMemoListComponent.prototype, Reflux.listenTo(MemoStore, "onMemoChanged"));
export default ShowMemoListComponent;
