/* 

Given a string with alpha-numeric characters and parentheses, return a string with balanced parentheses by removing the fewest characters possible. You cannot add anything to the string.
Balanced parentheses means that each opening parenthesis has a corresponding closing parenthesis and the pairs of parentheses are properly nested. 

balance("()") -> "()"

balance("a(b)c)") -> "a(b)c" or "a(bc)"

balance(")(") -> ""
balance("(((((") -> ""
balance("(()()(") -> "()()"
balance(")(())(") -> "(())"
balance(")())(()()(") -> "()()()"  



balance("(((ccccc") -> "ccccc"

*/
  
function run (str) {  
    let thingsToRemove = [];
    let parenthesisTracker = []; // [0]; 
    const OPEN = '(';
    const CLOSE = ')';
    let len = str.length;
    
    for (let i = 0; i < len; i++) {
      let char = str.charAt(i);
      
      if (parenthesisTracker.length > 0 && char == CLOSE) {
        parenthesisTracker.pop();
      } else if (parenthesisTracker.length == 0 && char == CLOSE) {
        thingsToRemove.push (i);
      } else if (char == OPEN) {
        parenthesisTracker.push(i);
      }
      
    }
  
    thingsToRemove = thingsToRemove.concat(parenthesisTracker);
  
    let answer = "";
    for (let i = 0; i < len; i++) {
      let char = str.charAt(i);
      
      if (thingsToRemove.includes(i) == false) {
        answer += char;
      }
    }
    
    return answer;
  }
    