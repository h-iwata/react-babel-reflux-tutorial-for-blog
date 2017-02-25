import React from 'react';

class HelloWorldComponent extends React.Component {

  static get propTypes() {
    return {
      message: React.PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      message: ''
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    this.setState({
      count: ++this.state.count
    })
  }

  render() {
    return <h1 onClick={this.handleOnClick}>{this.props.message}{'!'.repeat(this.state.count)}</h1>;
  }
}
export default HelloWorldComponent;
