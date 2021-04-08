import Lexema from "./lexema.js";
import Stack from "./stack.js";

/**
 * Возвращает математическое выражение в обратной польской нотации.
 * Возвращает undefined в случае ошибки.
 * @param {string} expression - математическое выражение в инфиксной нотации.
 * @returns {string}
 */
const toReversedPolishNotation = function(expression) {
  let result = "";
  let stack = [];
  
  const lexemes = expression.split("");
  let i = 0;

  while (lexemes[i] !== undefined) {
    const lexema = lexemes[i];

    if (Lexema.isNumber(lexema)) {
      // Число — добавляем в строку вывода.
      result += lexema;
    } else if (Lexema.isOpenBracket(lexema)) {
      // Открывающая скобка — помещаем в стек.
      Stack.push(stack, lexema);
    } else if (Lexema.isOperator(lexema)) {
      // Оператор (O1)
      // Пока присутствует на вершине стека лексема-оператор (O2), чей приоритет выше или
      // равен приоритету O1, либо равенство приоритетов считается левоассоциативным:
      let stackTopLexema = Stack.top(stack);
      let stackIsEmpty = Stack.isEmpty(stack);
      let stackTopLexemaIsOperator = !stackIsEmpty && Lexema.isOperator(stackTopLexema);
      let stackTopOperatorHasHigherPriorityThanCurrent = stackTopLexemaIsOperator && Lexema.firstOperatorHasGreaterOrEqualPriority(stackTopLexema, lexema);
      while (stackTopOperatorHasHigherPriorityThanCurrent) {
        // Перекладываем O2 из стека в выходную очередь.
        result += Stack.pop(stack);

        stackTopLexema = Stack.top(stack);
        stackIsEmpty = Stack.isEmpty(stack);
        stackTopLexemaIsOperator = !stackIsEmpty && Lexema.isOperator(stackTopLexema);
        stackTopOperatorHasHigherPriorityThanCurrent = stackTopLexemaIsOperator && Lexema.firstOperatorHasGreaterOrEqualPriority(stackTopLexema, lexema);             
      }

      // Помещаем O1 в стек.
      Stack.push(stack, lexema);
    } else if (Lexema.isCloseBracket(lexema)) {
      // Закрывающая скобка:
      // Пока лексема на вершине стека не станет открывающей скобкой
      let stackTopLexema = Stack.top(stack);
      let stackIsEmpty = Stack.isEmpty(stack);
      let stackTopLexemaIsOpenBracket = !stackIsEmpty && Lexema.isOpenBracket(stackTopLexema);

      // Если стек закончился до того, встретилась открывающая скобка — в выражении содержится ошибка.
      if (stackIsEmpty) {
        // В выражении ошибка
          console.log("Error: Missed open bracket.");
          return undefined;
      }

      while (!stackTopLexemaIsOpenBracket) {
        // Перекладываем лексемы-операторы из стека в выходную очередь.
        result += Stack.pop(stack);

        stackTopLexema = Stack.top(stack);
        stackIsEmpty = Stack.isEmpty(stack);
        stackTopLexemaIsOpenBracket = !stackIsEmpty && Lexema.isOpenBracket(stackTopLexema);        

        // Если стек закончился до того, встретилась открывающая скобка — в выражении содержится ошибка.
        if (stackIsEmpty) {
          // В выражении ошибка
          console.log("Error: Missed open bracket.");
          return undefined;
        }
      }

      if (stackTopLexemaIsOpenBracket) {
        // Удаляем из стека открывающую скобку.
        Stack.pop(stack);
      }
    } else {
      // Ни одна из вышеперечисленных - ошибка
      console.log("Error: Unknown lexema.");
      return undefined;
    }

    i++;
    console.log(result, stack);
  }

  // Если во входной строке больше не осталось лексем:
  let stackTopLexema = Stack.top(stack);
  let stackIsEmpty = Stack.isEmpty(stack);
  // Если на вершине стека скобка — в выражении допущена ошибка.
  let stackTopLexemaIsBracket = !stackIsEmpty 
    && (Lexema.isOpenBracket(stackTopLexema) || Lexema.isCloseBracket(stackTopLexema));

  if (stackTopLexemaIsBracket) {
    // В выражении допущена ошибка.
    console.log("Error: Missed bracket.");
    return undefined;
  }

  // Пока есть операторы в стеке:
  while (!stackIsEmpty) {
    // Перекладываем оператор из стека в выходную очередь.
    result += Stack.pop(stack);
    
    stackTopLexema = Stack.top(stack);
    stackIsEmpty = Stack.isEmpty(stack);
    // Если на вершине стека скобка — в выражении допущена ошибка.
    let stackTopLexemaIsBracket = !stackIsEmpty 
      && (Lexema.isOpenBracket(stackTopLexema) || Lexema.isCloseBracket(stackTopLexema));

    if (stackTopLexemaIsBracket) {
      // В выражении допущена ошибка.
      console.log("Error: Missed bracket.");
      return undefined;
    }    
  }

  return result;
}

/**
 * Вычислить значение выражения в обратной польской нотации
 * @param {string} expressionInReversedPolishNotation - математическое выражение в обратной польской нотации
 * @returns {number}
 */
const evaluate = function(expressionInReversedPolishNotation) {
  let stack = [];

  const lexemes = expressionInReversedPolishNotation.split("");
  let i = 0;

  while (lexemes[i] !== undefined) {
    const lexema = lexemes[i];  

    // Обработка входного символа
    if (Lexema.isNumber(lexema)) {
      // Если на вход подан операнд, он помещается на вершину стека.
      Stack.push(stack, lexema);
    } else if (Lexema.isOperator(lexema)) {
    // Если на вход подан знак операции, то соответствующая операция выполняется над требуемым количеством значений, 
    // извлечённых из стека, взятых в порядке добавления. Результат выполненной операции кладётся на вершину стека.
      const secondOperand = Stack.pop(stack);
      const firstOperand = Stack.pop(stack);
      const value = evaluatePrimitive(lexema, firstOperand, secondOperand);
      Stack.push(stack, value);
    }

    i++;
    console.log(stack);
  }

  // После полной обработки входного набора символов результат вычисления выражения лежит на вершине стека.
  return Stack.pop(stack);
}

/**
 * Вычислить значение примитивного выражения
 * @param {string} operator - оператор
 * @param {string} operand1 - первый операнд
 * @param {string} operand2 - второй операнд
 */
const evaluatePrimitive = function(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return Number(operand1) + Number(operand2);
    case "-":
      return Number(operand1) - Number(operand2);
    case "*":
      return Number(operand1) * Number(operand2);
    case "/":
      return Number(operand1) / Number(operand2);
    default:
      // Несуществующий оператор
      return undefined;
  }
}

export default { toReversedPolishNotation, evaluate }