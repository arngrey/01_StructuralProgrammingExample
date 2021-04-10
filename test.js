import Expression from "./expression.js";
import assert from "assert";

console.log("Running tests...");

assert.strictEqual(Expression.toReversedPolishNotation("(2 / 2) * (1 + -5) / -1"), "2 2 / 1 -5 + * -1 /");
assert.strictEqual(Expression.evaluate(Expression.toReversedPolishNotation("(2 / 2) * (1 + -5) / -1")), 4);
assert.strictEqual(Expression.toReversedPolishNotation("(2 * 3) / 4 * 2 + (-2 - -3) + 9"), "2 3 * 4 / 2 * -2 -3 - + 9 +");
assert.strictEqual(Expression.evaluate(Expression.toReversedPolishNotation("(2 * 3) / 4 * 2 + (-2 - -3) + 9")), 13);

console.log("Tests complete. If you see no errors, all tests've passed successfully.")
