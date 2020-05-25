const contains = (s, search) => s.includes(search);
const endswith = (s, search) => s.endsWith(search);
const indexof = (s, search) => s.indexOf(search);
const lower = (s) => s.toLowerCase();
const replace = (s, searchValue, newValue) => s.replace(searchValue, newValue);
const split = (s, delimiter) => s.split(delimiter);
const sprintf = (s, values) => s.sprintf(values);
const startswith = (s, search) => s.startsWith(search);
const substring = (s, start, length) => s.substr(start, length);
const concat = (delimiter, arr) => arr.join(delimiter);

module.exports = {
  contains,
  endswith,
  indexof,
  lower,
  replace,
  split,
  sprintf,
  startswith,
  substring,
  concat,
};
