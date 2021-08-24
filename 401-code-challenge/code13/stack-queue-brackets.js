'use strict'


const validateBrackets =(string)=> {
    const stack = [];
    const brackets = { 
        ')': '(', 
        '}': '{', 
        ']': '['
    };
  for (const char of string) {
        
      if (!brackets[char]){
         stack.push(char); 
      } 
      else if (stack.pop() !== brackets[char]){
          return false;
      } 
    }
    return stack.length === 0;
  };

//   let test=validateBrackets('({{{}}})')
// //   let test1=validateBrackets('({{{}})')
//   let test1=validateBrackets('{{{})')

// console.log(test);
// console.log(test1);

module.exports=validateBrackets