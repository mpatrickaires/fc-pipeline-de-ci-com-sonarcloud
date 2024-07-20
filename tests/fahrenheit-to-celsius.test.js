const { fahrenheitToCelsius } = require('../src/fahrenheit-to-celsius');

test('41 fahrenheit is 5 celsius', () => {
  expect(fahrenheitToCelsius(41)).toBe(5);
});
