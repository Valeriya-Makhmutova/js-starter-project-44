const calculateExpression = (Num1, operator, Num2) => {
  if (operator === '+') {
    const answer = Num1 + Num2;
    return answer;
  }
  if (operator === '-') {
    const answer = Num1 - Num2;
    return answer;
  }
  if (operator === '*') {
    const answer = Num1 * Num2;
    return answer;
  }
  if (operator === '/') {
    const answer = Num1 / Num2;
    return answer;
  }
  return null;
};

export default calculateExpression;
