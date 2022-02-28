/**
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
 

Constraints:

1 <= num1.length, num2.length <= 200
num1 and num2 consist of digits only.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.

 */
 const ZERO = '0';
 const ZERO_ASCII_VALUE = ZERO.charCodeAt(0);
 
 
 var multiply = function(num1, num2) {
     let num1Len = num1.length;
     let num2Len = num2.length;
     
     if ((num1Len == 1 && num1.charAt(0) == '0') || (num2Len == 1 && num2.charAt(0) == '0')) {
         return "0";
     }
     
     let arrayLength = num1Len + num2Len;
     let answer = new Array(arrayLength).fill(0);
     let cursor = arrayLength - 1;
     
     for (let i=num1Len-1; i >= 0; i--) {
         let num1Value = num1.charCodeAt(i) - ZERO_ASCII_VALUE;
         
 
         for (let j=num2Len-1; j >= 0; j--) {
             let num2Value = num2.charCodeAt(j) - ZERO_ASCII_VALUE;
             let product = num1Value * num2Value;
             let tmp = product + answer[i + j + 1];
             answer[i + j + 1] = tmp % 10;
             answer[i + j] += Math.floor(tmp / 10);
         
         }
     }
     
     let index = answer.findIndex(val => val != 0);
                                            
     while (index) {
         answer.shift();
         index--;
     }
     return answer.join("");
 };


 console.log(multiply("0","0"));
 console.log(multiply("12","78"));
 console.log(multiply("111111","2222"));
 