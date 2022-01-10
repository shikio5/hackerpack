

class Node {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    if (root == null) {
        return [];
    }

    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);

    return [root.val, ...leftValues, ...rightValues];
};

const breadFirstSeach = (root) => {
    let queue = new Queue();
    return [...queue];
};

const a = new Node ("a");
const b = new Node ("b");
const c = new Node ("c");
const d = new Node ("d");
const e = new Node ("e");
const f = new Node ("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

let result = depthFirstValues(a);

console.log(result);
console.log(JSON.stringify(result)==JSON.stringify(['a', 'b', 'd', 'e', 'c', 'f']));