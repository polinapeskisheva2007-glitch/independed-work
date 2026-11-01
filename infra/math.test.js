import { sum, isAdult } from './math.js';

describe('sum', () => {
  test('складывает два числа', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('работает с отрицательными числами', () => {
    expect(sum(-1, 1)).toBe(0);
  });
});

describe('isAdult', () => {
  test('18 лет — взрослый', () => {
    expect(isAdult(18)).toBe(true);
  });

  test('17 лет — не взрослый', () => {
    expect(isAdult(17)).toBe(false);
  });
});
