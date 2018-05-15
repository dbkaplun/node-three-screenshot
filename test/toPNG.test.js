import * as THREE from 'three';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

import toPNG from '../src/toPNG';

expect.extend({ toMatchImageSnapshot });

describe('toPNG', () => {
  it('should create a PNG snapshot for a THREE.Object3D', () => {
    const obj = new THREE.Mesh(
      new THREE.BoxGeometry(10, 10, 10),
      new THREE.MeshBasicMaterial({ color: 'green' }),
    );
    expect(toPNG(obj)).toMatchImageSnapshot({
      // Minor difference between OSes
      failureThreshold: '0.01',
      failureThresholdType: 'percent',
    });
  });
});
