
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.visited = false;
    }
}

class Queue extends Array {
    enqueue(e) {
        this.push(e);
    }

    dequeue(e) {
        return this.shift();
    }

    size() {
        return this.length;
    }

    peek() {
        return this[0];
    }

    isEmpty() {
        return this.length == 0;
    }
}

const treeIncludesDFS = (root, target) => {
    if (root == null || root.length == 0) {
        return target == null || target == "";
    }

    if (target == null || target == "" && root != null && root.length > 0) {
        return false;
    }

    console.log ("visiting: " + root.val);

    if (root.left == null && root.right == null) {
        return root.val == target;
    }
    
    return treeIncludesDFS(root.left, target) || treeIncludesDFS (root.right, target);
}

const treeIncludesBFS = (queue, target, found) => {
    if (queue.isEmpty()) {
        return [];
    }

    let node = queue.dequeue();

    if (node.val == target) {
        found.result = true;
        return [];
    }

    let result = [];
    if (node.visited) {
        return [];
    } else {
        node.visited = true;
        result.push(node.val);
    }

    if (node.left != null && node.left.visited == false) {
        queue.enqueue(node.left);
    }

    if (node.right != null && node.right.visited == false) {
        queue.enqueue(node.right);
    }

    return [...result, ...treeIncludesBFS(queue, target, found)];
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let expected = "g";
let result = treeIncludesDFS(a, expected);

console.log("DFS Expected: ", expected, " Actual: ", result);

let queue = new Queue();
queue.enqueue(a);
result = { result: false };
treeIncludesBFS(queue, expected, result);

console.log("BFS Expected: ", expected, " Actual: ", result.result);

/*
        a
      /   \
     b     c
    / \     \
   d   e     f
*/


function breadthFirstSearch (root) {
    if (root == null) {
        return [];
    }

    let queue = new Queue();
    queue.enqueue(root);
    let result = [];

    while (queue.length > 0) {
        let node = queue.dequeue();
        if (node != null) {
            result.push(node.val);
        }

        if (node != null) {
            queue.enqueue(node.left);
        }

        if (node != null) {
            queue.enqueue(node.right);
        }
    }

    return result;
}

// lol, recursion is essentially a stack whereas BFS iterates as a queue... it won't work, unless you create your own data structure
function recursiveBFSDontWorkWithoutHack (queue) {
    if (queue.isEmpty()) {
        return [];
    }

    let node = queue.dequeue();
    let result = [];
    if (node.visited) {
        return [];
    } else {
        node.visited = true;
        result.push(node.val);
    }

    if (node.left != null && node.left.visited == false) {
        queue.enqueue(node.left);
    }

    if (node.right != null && node.right.visited == false) {
        queue.enqueue(node.right);
    }

    return [...result, ...recursiveBFSDontWorkWithoutHack(queue)];
};