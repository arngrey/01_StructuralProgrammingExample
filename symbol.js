const numberSymbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const operatorSymbols = ["+", "-", "*", "/"];
const unaryOperatorSymbols = ["+", "-"];
const openBracketSymbol = "(";
const closeBracketSymbol = ")";
const spaceSymbol = " ";

/**
 * Является ли символ числом?
 * @param {string} symbol - символ
 * @returns {boolean}
 */
const isNumber = function(symbol) {
  return numberSymbols
    .some(number => number === symbol); 
}

/**
 * Является ли символ скобкой?
 * @param {string} symbol - символ
 * @returns {boolean}
 */
const isAnyBracket = function(symbol) {
  return symbol === closeBracketSymbol || symbol === openBracketSymbol;
}

/**
 * Является ли символ оператором?
 * @param {string} symbol - символ
 * @returns {boolean}
 */
const isOperator = function(symbol) {
  return operatorSymbols
    .some(operator => operator === symbol);
}

/**
 * Является ли символ унарным оператором?
 * @param {string} symbol - символ
 * @returns {boolean}
 */
const isUnaryOperator = function(symbol) {
  return unaryOperatorSymbols
    .some(unaryOperator => unaryOperator === symbol);
}

/**
 * Является ли символ пробелом?
 * @param {string} symbol - символ
 * @returns {boolean}
 */
const isSpace = function(symbol) {
  return symbol === spaceSymbol;
}

export default { isNumber, isAnyBracket, isOperator, isUnaryOperator, isSpace }
