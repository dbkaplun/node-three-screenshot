'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toPNG;

var _ = require('.');

function toPNG(obj, opts) {
  return (0, _.toCanvas)(obj, opts).toBuffer();
}