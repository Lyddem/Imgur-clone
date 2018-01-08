var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Hello = createReactClass({
  render: function() {
    return (<h1 className="red">
      Hello!
    </h1>
    )
  }
});

// var element = createElement(Hello, {});
ReactDOM.render( <Hello />, document.querySelector('.container'));
