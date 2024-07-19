import { footToCentimetre } from '../src/foot-to-centimetre';

test('50 foot is 1524 centimetre', () => {
  expect(footToCentimetre(50)).toBe(1524);
});
