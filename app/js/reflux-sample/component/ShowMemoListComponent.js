'use strict';

import React from 'react';
import {ListGroup, ListGroupItem, Button} from 'react-bootstrap';

//import MemoStore from '../objects/MemoStore';

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
    this.onMemoChange = this.onMemoChange.bind(this);
  }

  componentDidMount(){
    this.setState({});
    //MemoStore.addChangeListener(this.onMemoChange);
  }

  componentWillUnmount() {
    //MemoStore.removeChangeListener(this.onMemoChange);
  }

  onMemoChange(memos) {
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
export default ShowMemoListComponent;
