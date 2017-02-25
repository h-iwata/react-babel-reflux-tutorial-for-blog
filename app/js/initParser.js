'use strict';

import parser from './common/utils/domParser.js';

import HelloWorldComponet from './samples/component/HelloWorldComponent';

export default function ()
{
  parser.register({
    'HelloWorldComponet': HelloWorldComponet
  });
  parser.parse(document.getElementsByTagName("BODY")[0]);
}
