## right-pad

String right pad (inverse of the popular [left-pad](https://github.com/camwest/left-pad) package).

## Usage

```js
rightpad = require('right-pad')

rightpad('foo', 5)
// => "foo  "

rightpad('foobar', 6)
// => "foobar"

rightpad(1, 2, 0)
// => "10"
```