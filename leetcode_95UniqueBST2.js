/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var generateTrees = function (n) {
    let memoize = {};
    
    for (let i=1; i<=n; i++) {
        memoize[getKey(i,i)] = [new TreeNode(i)];
    }

    function getKey(a, b) {
        return a + "-" + b;
    }

    function getSubTree(start, end) {
        if (start > end) {
            return [null];
        }

        const key = getKey(start, end);
        if (memoize.hasOwnProperty(key)) {
            return memoize[key];
        }

        let result = [];
        for (let root = start; root <= end; root++) {

            let leftTrees = getSubTree(start, root - 1);
            let rightTrees = getSubTree(root + 1, end);

            for (let leftNode of leftTrees) {
                for (let rightNode of rightTrees) {
                    const rootNode = new TreeNode(root);
                    rootNode.left = leftNode;
                    rootNode.right = rightNode;

                    result.push(rootNode);
                }
            }
        }

        memoize[key] = result;
        return memoize[key];
    }

    let answer = getSubTree(1, n);
    //console.log(JSON.stringify(memoize, null, 2));
    return answer;

};

console.log("actual: ", JSON.stringify(generateTrees(3)), "expected: ", '[{"val":1,"left":null,"right":{"val":2,"left":null,"right":{"val":3,"left":null,"right":null}}},{"val":1,"left":null,"right":{"val":3,"left":{"val":2,"left":null,"right":null},"right":null}},{"val":2,"left":{"val":1,"left":null,\
 "right":null},"right":{"val":3,"left":null,"right":null}},{"val":3,"left":{"val":1,"left":null,"right":{"val":2,"left":null,"right":null}},"right":null},{"val":3,"left":\
  {"val":2,"left":{"val":1,"left":null,"right":null},"right":null},"right":null}]');