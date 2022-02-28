/*
Reverse Operations
You are given a singly-linked list that contains N integers. A subpart of the list is a contiguous set of even elements, bordered either by either end of the list or an odd element. For example, if the list is [1, 2, 8, 9, 12, 16], the subparts of the list are [2, 8] and [12, 16].
Then, for each subpart, the order of the elements is reversed. In the example, this would result in the new list, [1, 8, 2, 9, 16, 12].
The goal of this question is: given a resulting list, determine the original order of the elements.
Implementation detail:
You must use the following definition for elements in the linked list:
class Node {
    int data;
    Node next;
}
Signature
Node reverse(Node head)
Constraints
1 <= N <= 1000, where N is the size of the list
1 <= Li <= 10^9, where Li is the ith element of the list
Example
Input:
N = 6
list = [1, 2, 8, 9, 12, 16]
Output:
[1, 8, 2, 9, 16, 12]
*/

// Add any extra import statements you may need here


class Node {
    constructor(x) {
      this.data = x;
      this.next = null;
    }
  }
  
  // Add any helper functions you may need here
  function isEven (node){
    return node.data % 2 == 0;
  }
  
  function reverse(head) {
    // Write your code here
    let evenArray = [];
    let result = [];
    
    while (head){
      if (isEven(head)) {
        evenArray.push(head);
      } else {
        while (evenArray.length > 0) {
          result.push(evenArray.pop());
        }
        result.push(head);
      }
      //console.log(head.data);
      head = head.next;
    }
    
    if (evenArray.length > 0){
      while (evenArray.length > 0) {
          result.push(evenArray.pop());
      }
    }
    
    let newHead = result.shift();
    let currentNode = newHead;
    while(result.length > 0) {
      let nextNode = result.shift();
      
      currentNode.next = nextNode;
      currentNode = nextNode;
    }
    
    currentNode.next = null;
    
    return newHead;
  }
  
  
  
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  var test_case_number = 1;
  
  function printLinkedList(head) {
    var out = '[';
    while (head != null) {
      out += head.data;
      head = head.next;
      if (head != null) {
        out += ' ';
      }
    }
    out += ']';
    return out;
  }
  
  function check(expectedHead, outputHead) {
    var result = true;
    var tempExpectedHead = expectedHead;
    var tempOutputHead = outputHead;
    while (expectedHead != null && outputHead != null) {
      result &= (expectedHead.data == outputHead.data);
      expectedHead = expectedHead.next;
      outputHead = outputHead.next;
    }
    if (!(expectedHead == null && outputHead == null)) result = false;
  
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    } else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printLinkedList(tempExpectedHead);
      out += ' Your output: ';
      out += printLinkedList(tempOutputHead);
      console.log(out);
    }
    test_case_number++;
  }
  
  function createLinkedList(arr) {
    var head = null;
    var tempHead = head;
    for (var v of arr) {
      if (head == null) {
        head = new Node(v);
        tempHead = head;
      } else {
        head.next = new Node(v);
        head = head.next;
      }
    }
    return tempHead;
  }
  
  let input = [1, 2, 8, 9, 12, 16];
  var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
  var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
  console.log("input : ", input);
  var output_1 = reverse(head_1);
  check(expected_1, output_1);
  
  input = [2, 18, 24, 3, 5, 7, 9, 6, 12];
  var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
  var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);
  console.log("input : ", input);
  var output_2 = reverse(head_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  input = [1,2,3,8,10,12,9,8,7];
  var head_2 = createLinkedList(input);
  var expected_2 = createLinkedList([1,2,3,12,10,8,9,8,7]);
  console.log("input : ", input);
  var output_2 = reverse(head_2);
  check(expected_2, output_2);