import React from 'react';
import { connect } from 'react-redux';
import CounterActions from '../actions/CounterActions';

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
