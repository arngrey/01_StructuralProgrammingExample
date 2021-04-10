const highestPriorityOperators = ["*", "/"];
const lowestPriorityOperators = ["+", "-"];

/**
 * Является ли приоритет первого оператора больше или равен приоритету второго?
 * @param {string} operator1 - первый оператор 
 * @param {string} operator2 - второй оператор
 * @returns {boolean}
 */
const firstOperatorHasGreaterOrEqualPriorityThanSecond = function(operator1, operator2) {
  const firstOperatorHasLowestPriority = lowestPriorityOperators
    .some(operator => operator === operator1);
  const secondOperatorHasHighestPriority = highestPriorityOperators
    .some(operator => operator === operator2);    
  return !(firstOperatorHasLowestPriority && secondOperatorHasHighestPriority);
}

export default { firstOperatorHasGreaterOrEqualPriorityThanSecond }