'use strict';

import React from 'react';

class EmptyComponent extends React.Component {

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
    this.setState({});
  }

  render() {
    return (
      <div>EmptyComponent</div>
    );
  }
}
export default EmptyComponent;
