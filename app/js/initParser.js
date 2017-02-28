'use strict';

import parser from './common/utils/domParser.js';

import HelloWorldComponet from './samples/component/HelloWorldComponent';
import ShowHelloWorldCounterButtonComponent from './samples/component/ShowHelloWorldCounterButtonComponent';
import ShowCounterComponent from './samples/component/ShowCounterComponent';

export default function ()
{
  parser.register({
    'HelloWorldComponet': HelloWorldComponet,
    'ShowHelloWorldCounterButtonComponent': ShowHelloWorldCounterButtonComponent,
    //'ShowCounterComponent': ShowCounterComponent,
  });
  parser.parse(document.getElementsByTagName("BODY")[0]);
}
