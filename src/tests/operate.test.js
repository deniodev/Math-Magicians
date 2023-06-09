import operate from '../logic/operate';

describe('test for operation in operate js file', () => {
  test('sum of 1 and 3 to equal 4', () => {
    const sum = operate(1, 3, '+');
    expect(sum).toBe('4');
  });
  test('multiplication of 6 and 3 to equal 18', () => {
    const multiply = operate(6, 3, 'x');
    expect(multiply).toBe('18');
  });
  test('division of 6 by 3 to equal 2', () => {
    const divide = operate(6, 3, '÷');
    expect(divide).toBe('2');
  });
});
