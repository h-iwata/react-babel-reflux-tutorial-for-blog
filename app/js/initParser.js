'use strict';

import parser from './common/utils/domParser.js';

import HelloWorldComponet from './samples/component/HelloWorldComponent';
import ShowHelloWorldCounterButtonComponent from './samples/component/ShowHelloWorldCounterButtonComponent';


import ShowCounterComponent from './samples/component/ShowCounterComponent';
import CounterStore from './samples/stores/CounterStore';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

export default function ()
{
  parser.register({
    'HelloWorldComponet': HelloWorldComponet,
    'ShowHelloWorldCounterButtonComponent': ShowHelloWorldCounterButtonComponent,
    //'ShowCounterComponent': ShowCounterComponent,
  });
  parser.parse(document.getElementsByTagName("BODY")[0]);

  ReactDOM.render(<Provider store={CounterStore}><ShowCounterComponent /></Provider>, document.querySelector('#mount'));
}
