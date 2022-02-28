/**
Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
Example 1: 
Input: n = 3
Output: 5

Example 2:
Input: n = 1
Output: 1

1. The base cases are as such that you know what are the number of trees to expect for 0,1,2 nodes.
2. How do you build you base cases from there?
2a. You want to keep in mind that each node in your tree can be a root
2b. math combination rules are as such that C1 * C2 = all combinations. aka: memoize[leftTree] * memoize[rightTree]
3. Complexity 
3a. time complexity is O(n^2) because we iterate through node as root and looping through all its subtrees (from left to right)
3b. space complexity is O(n) because i need to memoize my results for all the sub cases and reuse them to get the larger answer.

 */


 var numTrees = function(n) {
    var memoize = {
        0:1, // no node mean that you only have 1 permutation of a tree
        1:1,
        2:2,
        3:5  // given by example
    };
    
    return visit(n);
    
    function visit (n) {
        if (memoize.hasOwnProperty(n)) {
            return memoize[n];
        }
                
        for (let nodes = 2; nodes <= n; nodes++) {
            let total = 0;
            for (let root = 1; root <= nodes; root++) { // if, root = 3
                let leftTree = root - 1; // number of nodes of the left side of the root node, let say 5 nodes and choose 3rd node as root, then left side has 2 nodes for combinations (3 - 1)
                let rightTree = nodes - root; // number of nodes of the right side of the root node, then right side has 2 nodes for combinations (5 - 3)
                total += memoize[leftTree] * memoize[rightTree];
            }
            memoize[nodes] = total;
        }
        return memoize[n];
    }   
    
};


console.log("actual: ", numTrees(6), "expected: ", 132);
console.log("actual: ", numTrees(8), "expected: ", 1430);
console.log("actual: ", numTrees(9), "expected: ", 4862);