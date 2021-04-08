const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operators = ["+", "-", "*", "/"];
const highestPriorityOperators = ["*", "/"];
const lowestPriorityOperators = ["+", "-"];

/**
 * Является ли лексема числом?
 * @param {string} lexema - лексема
 * @returns {boolean}
 */
const isNumber = function(lexema) {
  return numbers
  .some(number => number === lexema); 
}

/**
 * Является ли лексема открывающейся скобкой?
 * @param {string} lexema - лексема
 * @returns {boolean}
 */
const isOpenBracket = function(lexema) {
  return lexema === "(";
}

/**
 * Является ли лексема закрывающейся скобкой?
 * @param {string} lexema - лексема
 * @returns {boolean}
 */
const isCloseBracket = function(lexema) {
  return lexema === ")";
}

/**
 * Является ли лексема оператором?
 * @param {string} lexema - лексема
 * @returns {boolean}
 */
const isOperator = function(lexema) {
  return operators
    .some(operator => operator === lexema);
}

/**
 * Является ли приоритет первого оператора больше или равен приоритету второго?
 * @param {string} operator1 - первый оператор 
 * @param {string} operator2 - второй оператор
 * @returns {boolean}
 */
const firstOperatorHasGreaterOrEqualPriority = function(operator1, operator2) {
  const firstOperatorHasLowestPriority = lowestPriorityOperators
    .some(operator => operator === operator1);
  const secondOperatorHasHighestPriority = highestPriorityOperators
    .some(operator => operator === operator2);    
  return !(firstOperatorHasLowestPriority && secondOperatorHasHighestPriority);
}

export default { isNumber, isOpenBracket, isCloseBracket, isOperator, firstOperatorHasGreaterOrEqualPriority }