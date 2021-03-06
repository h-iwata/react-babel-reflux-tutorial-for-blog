'use strict';

import parser from './common/utils/domParser.js';

import HelloWorldComponet from './samples/component/HelloWorldComponent';
import ShowHelloWorldCounterButtonComponent from './samples/component/ShowHelloWorldCounterButtonComponent';

// flux samples
import Flux_AddMemoButtonComponent from './flux-sample/component/AddMemoFormComponent';
import Flux_ShowMemoListComponent from './flux-sample/component/ShowMemoListComponent';
import Flux_ShowMemoSizeComponent from './flux-sample/component/ShowMemoSizeComponent';

export default function ()
{
  parser.register({
    'HelloWorldComponet': HelloWorldComponet,
    'ShowHelloWorldCounterButtonComponent': ShowHelloWorldCounterButtonComponent,
    'Flux.AddMemoFormComponent': Flux_AddMemoButtonComponent,
    'Flux.ShowMemoListComponent': Flux_ShowMemoListComponent,
    'Flux.ShowMemoSizeComponent': Flux_ShowMemoSizeComponent,
  });
  parser.parse(document.getElementsByTagName("BODY")[0]);
}
