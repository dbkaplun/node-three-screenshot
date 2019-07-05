import { createCanvas } from 'canvas';

import THREE from './three';

export const DEFAULT_OPTS = {
  width: 640,
  height: 480,
  camera: null,
  cameraPosition: new THREE.Vector3(30, 40, 50),
};

export default function toCanvas(scene, options) {
  const opts = { ...DEFAULT_OPTS, ...options };

  let outScene = scene;
  if (!(scene instanceof THREE.Scene)) {
    outScene = new THREE.Scene();
    outScene.add(scene);
  }

  let { camera } = opts;
  if (!camera) {
    camera = new THREE.PerspectiveCamera(
      35, // Field of view
      opts.width / opts.height, // Aspect ratio
      0.1, // Near
      10000, // Far
    );
    camera.position.copy(opts.cameraPosition);
    camera.lookAt(outScene.position);
  }

  const canvas = createCanvas(opts.width, opts.height);
  canvas.style = {}; // dummy shim to prevent errors during render.setSize
  const renderer = new THREE.CanvasRenderer({ canvas });
  renderer.setSize(opts.width, opts.height);
  renderer.render(outScene, camera);
  return canvas;
}
