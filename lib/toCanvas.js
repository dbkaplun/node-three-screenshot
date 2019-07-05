'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_OPTS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = toCanvas;

var _canvas = require('canvas');

var _three = require('./three');

var _three2 = _interopRequireDefault(_three);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_OPTS = exports.DEFAULT_OPTS = {
  width: 640,
  height: 480,
  camera: null,
  cameraPosition: new _three2.default.Vector3(30, 40, 50)
};

function toCanvas(scene, options) {
  const opts = _extends({}, DEFAULT_OPTS, options);

  let outScene = scene;
  if (!(scene instanceof _three2.default.Scene)) {
    outScene = new _three2.default.Scene();
    outScene.add(scene);
  }

  let { camera } = opts;
  if (!camera) {
    camera = new _three2.default.PerspectiveCamera(35, // Field of view
    opts.width / opts.height, // Aspect ratio
    0.1, // Near
    10000);
    camera.position.copy(opts.cameraPosition);
    camera.lookAt(outScene.position);
  }

  const canvas = (0, _canvas.createCanvas)(opts.width, opts.height);
  canvas.style = {}; // dummy shim to prevent errors during render.setSize
  const renderer = new _three2.default.CanvasRenderer({ canvas });
  renderer.setSize(opts.width, opts.height);
  renderer.render(outScene, camera);
  return canvas;
}