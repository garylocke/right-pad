## right-pad

String right pad (inverse of the popular [left-pad](https://github.com/camwest/left-pad) package).

## Install

```bash
$ npm install @garylocke/right-pad
```

## Usage

```js
rightpad = require('@garylocke/right-pad')

rightpad('foo', 5)
// => "foo  "

rightpad('foobar', 6)
// => "foobar"

rightpad(1, 2, 0)
// => "10"
```
