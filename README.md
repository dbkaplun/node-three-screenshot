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
