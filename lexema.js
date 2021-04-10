const numberLexemes = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", 
  "+1", "+2", "+3", "+4", "+5", "+6", "+7", "+8", "+9", "+0", 
  "-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9", "-0"
];
const operatorLexemes = ["+", "-", "*", "/"];
const openBracketLexema = "(";
const closeBracketLexema = ")";

/**
 * Является ли лексема числом?
 * @param {string} lexema - лексема
 * @returns {boolean}
 */
const isNumber = function(lexema) {
  return numberLexemes
    .some(number => number === lexema); 
}

/**
 * Является ли лексема открывающейся скобкой?
 * @param {string} lexema - лексема
 * @returns {boolean}
 */
const isOpenBracket = function(lexema) {
  return lexema === openBracketLexema;
}

/**
 * Является ли лексема закрывающейся скобкой?
 * @param {string} lexema - лексема
 * @returns {boolean}
 */
const isCloseBracket = function(lexema) {
  return lexema === closeBracketLexema;
}

/**
 * Является ли лексема оператором?
 * @param {string} lexema - лексема
 * @returns {boolean}
 */
const isOperator = function(lexema) {
  return operatorLexemes
    .some(operator => operator === lexema);
}

export default { isNumber, isOpenBracket, isCloseBracket, isOperator }