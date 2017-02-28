import React from 'react';
import { connect } from 'react-redux';

class ShowCounterComponent extends React.Component {
    render(){
        return (
            <div>
                <p>現在の数値：{this.props.counter}</p>
                <button onClick={ () =>{ this.props.incCounter(1) } } >加算</button>
            </div>
        );
    };
};

class CounterActions {
  static increase(num = 1) {
      return {
          type: "INC_COUNTER",
          num
      };
  };
}

export default connect(
  state => {
    return { counter: state.counter };
  },
  dispatch => {
    return {
      incCounter(value) {
        dispatch(CounterActions.increase(value));
      }
    }
  }
)(ShowCounterComponent);
