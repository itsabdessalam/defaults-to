const test = require("ava");
const defaultTo = require("..");

test("main", t => {
  t.is(1, defaultTo(undefined, 1));
  t.is(1, defaultTo(null, 1));
  t.is(1, defaultTo(NaN, 1));
  t.is(0, defaultTo(0, 1));
  t.is(1, defaultTo(1, 10));
  t.is(10, defaultTo(10, 1));
  t.is("value", defaultTo("value", "valueIfNotDefined"));
  t.is("", defaultTo("", "valueIfNotDefined"));
  t.deepEqual([1, 2, 3], defaultTo([1, 2, 3], []));
  t.deepEqual({ a: 1, b: 2 }, defaultTo({ a: 1, b: 2 }, {}));
  t.deepEqual([], defaultTo(null, []));
  t.deepEqual([], defaultTo(undefined, []));
  t.deepEqual({}, defaultTo(null, {}));
  t.deepEqual({}, defaultTo(undefined, {}));
});
