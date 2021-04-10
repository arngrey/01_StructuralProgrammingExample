// Корневой файл

import Readline from "./readline.js";
import Expression from "./expression.js";

// Считать у пользователя строку с математическим выражением
Readline.once(expression => {
  // Преобразовать выражение в Обратную Польскую Нотацию
  const expressionInReversePolishNotation = Expression.toReversedPolishNotation(expression);

  if (expressionInReversePolishNotation !== undefined) {
    // Расчитать значение выражения
    const value = Expression.evaluate(expressionInReversePolishNotation);

    // Вывести пользователю строки с результатом
    console.log(expressionInReversePolishNotation + "\n" + value);
  }
});
