# default-to [![Build Status](https://travis-ci.com/Abdessalam98/default-to.svg?token=QqMEeU97cu6BFoo1RaKD&branch=master)](https://travis-ci.com/Abdessalam98/default-to)

> Check if a given value is not undefined, null or NaN else it returns default value

## Install

```
$ npm install default-to
```

## Usage

```js
const defaultsTo = require("defaults-to");

defaultsTo(undefined, 1);
//=> 1
defaultsTo(null, 1);
//=> 1
defaultsTo(NaN, 1);;
//=> 1
defaultsTo("value", "valueIfNotDefined");
//=> "value"
defaultsTo("", "valueIfNotDefined");
//=> ""
defaultsTo([1, 2, 3], []);
//=> [1, 2, 3]
defaultsTo({ a: 1, b: 2 }, {});
//=> { a: 1, b: 2 }
defaultsTo(null, []);
//=> []
defaultsTo(undefined, [])
//=> []
defaultsTo(null, {})
//=> {}
defaultsTo(undefined, {})
//=> {}
```

## License

MIT © [Abdessalam BENHARIRA](https://abdessalam.dev)
