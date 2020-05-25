const count = (arr) => arr.length;
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const product = (arr) => arr.reduce((total, num) => total * num, 1);
const max = (arr) => Math.max(arr);
const min = (arr) => Math.min(arr);
const sort = (arr) => [...arr].sort();
const all = (arr) => (arr.length === 0 ? true : arr.every((v) => v === true));
const any = (arr) => (arr.length === 0 ? false : arr.includes(true));

module.exports = { count, sum, product, min, sort, all, any };
