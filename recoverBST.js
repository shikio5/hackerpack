function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


let a = new TreeNode(2);
let b = new TreeNode(3, undefined, a);
let c = new TreeNode(1, b, undefined);
var firstStrangeNode;
var secondStrangeNode;
var previousNode = new TreeNode(0);
let d = new TreeNode(2); 
let e = new TreeNode(4, d, undefined); 
let f = new TreeNode(1); 
let g = new TreeNode(3, f, e); 

recoverTree(g);
console.log("new tree: ", g);

function recoverTree (root) {
    console.log(root)
    dpsInOrderTraversal(root);
    let tempVal = firstStrangeNode.val;
    firstStrangeNode.val = secondStrangeNode.val;
    secondStrangeNode.val = tempVal;

    return root;
};

function dpsInOrderTraversal(root) {
    if (root == null) {
        return;
    }

    dpsInOrderTraversal(root.left);

    if (firstStrangeNode == null && previousNode.val > root.val) {
        console.log("weird first node: ", root.val);
        firstStrangeNode = previousNode;
    }

    if (firstStrangeNode != null && previousNode.val > root.val) {
        console.log("weird 2nd node: ", previousNode.val);
        secondStrangeNode = root;
    }
    previousNode = root;

    dpsInOrderTraversal(root.right);
}