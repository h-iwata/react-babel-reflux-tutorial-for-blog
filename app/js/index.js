'use strict';

import initParser    from './initParser.js';

initParser();

import ShowCounterComponent from './samples/component/ShowCounterComponent';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const Store = createStore((state = {counter: 0}, action) => {
    switch(action.type){
        case 'INC_COUNTER':
            return Object.assign({}, state, {
                counter: state.counter + action.num
            });
        default:
            return state;
    };
});

ReactDOM.render(<Provider store={Store}><ShowCounterComponent /></Provider>, document.querySelector('#mount'));
