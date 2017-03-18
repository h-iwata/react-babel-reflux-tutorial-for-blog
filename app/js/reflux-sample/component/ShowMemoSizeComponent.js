'use strict';

import React from 'react';

// import MemoStore from '../objects/MemoStore';

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
      size: memos.length
    })
  }

  render() {
    return (
      <div>メモの数: {this.state.size}</div>
    );
  }
}
export default ShowMemoSizeComponent;
