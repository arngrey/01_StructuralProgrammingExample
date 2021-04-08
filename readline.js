import Readline from "readline";

/**
 * Считать одну введенную пользователем строку
 * @param {Function} callback - функция обратного вызова 
 */
const once = function (callback) {
  const userInputHandler = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  userInputHandler.once("line", result => {
    callback(result);
    userInputHandler.close();
  });
}

export default { once }
