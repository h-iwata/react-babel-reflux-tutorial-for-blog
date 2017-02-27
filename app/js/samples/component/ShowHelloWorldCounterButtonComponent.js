'use strict';

import React from 'react';
import parser from '../../common/utils/domParser'

class ShowHelloWorldCounterButtonComponent extends React.Component {

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
      count: 0
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount(){
    this.setState({});
  }

  handleOnClick() {
    const component = parser.findComponentByName('HelloWorldComponet');
    this.setState({
      count: component.state.count
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>ShowHelloWorldCounterButtonComponent</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
export default ShowHelloWorldCounterButtonComponent;
