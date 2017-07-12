(function (exports,React) {
'use strict';

var React__default = 'default' in React ? React['default'] : React;

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var StatelessButton = function StatelessButton() {
  return React__default.createElement(
    'h2',
    null,
    'Button'
  );
};

var InnerComponent = function (_Component) {
  inherits(InnerComponent, _Component);

  function InnerComponent() {
    classCallCheck(this, InnerComponent);
    return possibleConstructorReturn(this, (InnerComponent.__proto__ || Object.getPrototypeOf(InnerComponent)).apply(this, arguments));
  }

  createClass(InnerComponent, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'div',
        null,
        React__default.createElement(
          'h1',
          null,
          'Hello World'
        ),
        React__default.createElement(StatelessButton, null)
      );
    }
  }]);
  return InnerComponent;
}(React.Component);

var Button = function (_Component2) {
  inherits(Button, _Component2);

  function Button() {
    classCallCheck(this, Button);
    return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  createClass(Button, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(InnerComponent, null);
    }
  }]);
  return Button;
}(React.Component);

exports.InnerComponent = InnerComponent;
exports.Button = Button;

}((this.VAN = this.VAN || {}),React));
