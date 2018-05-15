# node-three-screenshot
Take a PNG screenshot of a THREE scene

## Usage

```sh
$ npm install node-three-screenshot
```

```js
import { toPNG } from 'node-three-screenshot';

fs.writeFileSync('out.png', toPNG(scene));
```

### With Jest

```sh
$ npm install jest-image-snapshot
```

```js
import { toPNG } from 'node-three-screenshot';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

expect(toPNG(obj)).toMatchImageSnapshot();
```
