/**
 * Возвращает индекс верхнего элемента
 * @param {Array} stack - стэк
 * @returns {number}
 */
const getTopElementIndex = function(stack) {
  return stack.length - 1;
}

/**
 * Вставляет элемент в указанный стэк
 * @param {Array} stack - стэк
 * @param {*} item - вставляемый элемент
 * @returns {undefined}
 */
const push = function(stack, item) {
  const topElementIndex = getTopElementIndex(stack);
  stack[topElementIndex + 1] = item;
}

/**
 * Выталкивает верхний элемент из стэка
 * Возвращает undefined, если стэк пустой
 * @param {Array} stack - стэк
 * @returns {string}
 */
const pop = function(stack) {
  if (isEmpty(stack)) {
    return undefined;
  }

  const topElementIndex = getTopElementIndex(stack);
  const topElement = stack[topElementIndex];
  stack.splice(topElementIndex, 1);
  return topElement;
}

/**
 * Является ли стэк пустым?
 * @param {Array} stack - стэк 
 * @returns {boolean}
 */
const isEmpty = function(stack) {
  return stack.length === 0;
}

/**
 * Возвращает верхний элемент стэка
 * Возвращает undefined, если стэк пустой
 * @param {Array} stack - стэк
 * @returns {string}
 */
const top = function(stack) {
  if (isEmpty(stack)) {
    return undefined;
  }

  const topElementIndex = getTopElementIndex(stack);
  return stack[topElementIndex];
}

export default { push, top, pop, isEmpty };