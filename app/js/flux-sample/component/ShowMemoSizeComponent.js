'use strict';

import React from 'react';

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

  addMemo(memo) {
    this.setState({
      size: ++this.state.size
    })
  }

  render() {
    return (
      <div>メモの数: {this.state.size}</div>
    );
  }
}
export default ShowMemoSizeComponent;
