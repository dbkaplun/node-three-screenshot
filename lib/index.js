'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toCanvas = require('./toCanvas');

Object.defineProperty(exports, 'toCanvas', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_toCanvas).default;
  }
});
Object.defineProperty(exports, 'DEFAULT_OPTS', {
  enumerable: true,
  get: function () {
    return _toCanvas.DEFAULT_OPTS;
  }
});

var _toPNG = require('./toPNG');

Object.defineProperty(exports, 'toPNG', {
  enumerable: true,
  get: function () {
    return _interopRequireDefault(_toPNG).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }