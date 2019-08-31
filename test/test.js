const test = require("ava");
const defaultsTo = require("..");

test("main", t => {
  t.is(1, defaultsTo(undefined, 1));
  t.is(1, defaultsTo(null, 1));
  t.is(1, defaultsTo(NaN, 1));
  t.is(0, defaultsTo(0, 1));
  t.is(1, defaultsTo(1, 10));
  t.is(10, defaultsTo(10, 1));
  t.is("value", defaultsTo("value", "valueIfNotDefined"));
  t.is("", defaultsTo("", "valueIfNotDefined"));
  t.deepEqual([1, 2, 3], defaultsTo([1, 2, 3], []));
  t.deepEqual({ a: 1, b: 2 }, defaultsTo({ a: 1, b: 2 }, {}));
  t.deepEqual([], defaultsTo(null, []));
  t.deepEqual([], defaultsTo(undefined, []));
  t.deepEqual({}, defaultsTo(null, {}));
  t.deepEqual({}, defaultsTo(undefined, {}));
});
