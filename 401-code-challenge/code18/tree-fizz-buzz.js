"use strict";

let fizzBuzz = (tree) => {
  let current = tree.root;
  let result = [];
  if (!current) return -1;
  let trevers = (node) => {
    if (node.value % 3 == 0 && node.value % 5 == 0) {
      node.value = "fizzBuzz";
      result.push(node.value);
    } else if (node.value % 3 == 0) {
      node.value = "fizz";
      result.push(node.value);
    } else if ((node.value & 5) == 0) {
      node.value = "buzz";
      result.push(node.value);
    } else {
      result.push(node.value.toString());
    }

    if (node.left) trevers(node.left);
    if (node.right) trevers(node.right);
  };
  trevers(current);
  return result;
};
module.exports = fizzBuzz;
