# default-to

> Check if a given value is not undefined, null or NaN else it returns default value

## Install

```
$ npm install default-to
```

## Usage

```js
const defaultTo = require("default-to");

defaultTo(undefined, 1);
//=> 1
defaultTo(null, 1);
//=> 1
defaultTo(NaN, 1);;
//=> 1
defaultTo("value", "valueIfNotDefined");
//=> "value"
defaultTo("", "valueIfNotDefined");
//=> ""
defaultTo([1, 2, 3], []);
//=> [1, 2, 3]
defaultTo({ a: 1, b: 2 }, {});
//=> { a: 1, b: 2 }
defaultTo(null, []);
//=> []
defaultTo(undefined, [])
//=> []
defaultTo(null, {})
//=> {}
defaultTo(undefined, {})
//=> {}
```

## License

MIT © [Abdessalam BENHARIRA](https://abdessalam.dev)
