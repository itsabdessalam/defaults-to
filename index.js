module.exports = (value, defaultValue) => {
  return [undefined, null, NaN].includes(value) ? defaultValue : value;
};
