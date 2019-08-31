module.exports = (value, defaultValue) => {
    return value === undefined || value === null || Number.isNaN(value) ? defaultValue : value;
};
