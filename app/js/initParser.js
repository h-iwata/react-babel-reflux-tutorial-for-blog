'use strict';

import parser from './common/utils/domParser.js';

import HelloWorldComponet from './samples/component/HelloWorldComponent';
import ShowHelloWorldCounterButtonComponent from './samples/component/ShowHelloWorldCounterButtonComponent';

// flux samples
import Flux_AddMemoButtonComponent from './flux-sample/component/AddMemoButtonComponent';
import Flux_ShowMemoListComponent from './flux-sample/component/ShowMemoListComponent';

export default function ()
{
  parser.register({
    'HelloWorldComponet': HelloWorldComponet,
    'ShowHelloWorldCounterButtonComponent': ShowHelloWorldCounterButtonComponent,
    'Flux.AddMemoButtonComponent': Flux_AddMemoButtonComponent,
    'Flux.ShowMemoListComponent': Flux_ShowMemoListComponent,
  });
  parser.parse(document.getElementsByTagName("BODY")[0]);
}
