'use strict';

import React from 'react';
import ReactMixin from 'react-mixin';
import Reflux from 'reflux';
import MemoStore from '../stores/MemoStore';

class ShowMemoSizeComponent extends React.Component {

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
      size: 0,
    }
  }

  componentDidMount(){
    this.setState({});
  }

  onMemoChanged(memos) {
    this.setState({
      size: memos.length
    })
  }

  render() {
    return (
      <div>メモの数: {this.state.size}</div>
    );
  }
}
ReactMixin(ShowMemoSizeComponent.prototype, Reflux.listenTo(MemoStore, "onMemoChanged"));
export default ShowMemoSizeComponent;
