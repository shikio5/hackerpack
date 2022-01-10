
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

// lol, recursion is essentially a stack whereas BFS iterates as a queue... it won't work, unless you create your own data structure
const recursiveBFSDontWorkWithoutHack = (queue) => {
    if (queue.isEmpty()) {
        return [];
    }

    let node = queue.dequeue();
    let result = [];
    if (!node.visited) {
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
let queue = new Queue();
queue.enqueue(a);

let result = recursiveBFSDontWorkWithoutHack(queue);

console.log(result);
console.log(JSON.stringify(result) == JSON.stringify(['a', 'b', 'c', 'd', 'e', 'f']));

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