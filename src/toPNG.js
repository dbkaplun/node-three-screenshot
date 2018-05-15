import { toCanvas } from '.';

export default function toPNG(obj, opts) {
  return toCanvas(obj, opts).toBuffer();
}
