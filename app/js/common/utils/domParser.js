import parser from 'react-dom-parser'
import React from 'react';
import ReactDOM from 'react-dom';

export default  Object.assign(parser, {

  registryByName: {},

  findComponentByName(name = null) {
    if (name === null || this.registryByName[name] === undefined) {
      return null;
    }
    return this.registryByName[name][0];
  },

  findComponentsByName(name = null) {
    if (name === null || this.registryByName[name] === undefined) {
      return [];
    }
    return parser.registryByName[name];
  },

  parse(scope){

    function parseObjectFromString(stringOpts){
      return new Function("return ({"+stringOpts+"})")();
    }

    scope.querySelectorAll('[data-react-component]').forEach((node) => {
      let Component = ReactDOM.render(React.createElement(
        this.ParserConstructor, {
          component: node.getAttribute('data-react-component'),
          props: parseObjectFromString(node.getAttribute('data-react-props') || '')
        },
        React.createElement("div", {dangerouslySetInnerHTML: { __html: node.innerHTML }})
      ), node);
      this.registry.push(Component.refs.module);

      const componentName = node.getAttribute('data-react-component').match(/\.(.+)/);
      const name = (componentName) ? componentName[1] : node.getAttribute('data-react-component');
      if (this.registryByName[name] === undefined) {
        this.registryByName[name] = [Component.refs.module]
      } else {
        this.registryByName[name].push(Component.refs.module)
      }
      node.setAttribute('data-react-props', null);
      node.setAttribute('data-react-component', null);
    });

    for (let i = 0; i < this.callbacks.length;i++){
      this.callbacks[i]();
    }
    this.callbacks = [];
  }

});
