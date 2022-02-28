class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
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


let a = new Node("a");
let b = new Node("b");
let c = new Node("c");
let d = new Node("d");
let e = new Node("e");
let f = new Node("f");
let g = new Node("g");
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log (createMyLinkedList(a));
console.log (stringify(a));
console.log (stringify(b));
console.log (stringify(c));
console.log (stringify(d));

function stringify (a) {
    console.log("starting from ", a.val);
    let str = "";
    while(a) {
        str += a.val;
        a = a.next;
    }
    return str;
}

function createMyLinkedList(list) {
    let queue = [];
    let toLink = [];
    queue.push(list);
    
    while (queue.length > 0) {
        let toVisit = queue.shift();
        if(toVisit.left != null) {
            toLink.push(toVisit.left);
            
        }
        if(toVisit.right != null) {
            toLink.push(toVisit.right);
        }

        console.log("visited ", toVisit.val);

        if(toVisit.left != null) {
            queue.push(toVisit.left);
            
        }
        if(toVisit.right != null) {
            queue.push(toVisit.right);
        }

        if (queue.length == 0) {
            let dummy = null;
            let vals = "";
            while (toLink.length > 0) {
                let node = toLink.pop();
                node.next = dummy;
                dummy = node;
                vals = node.val + vals;
            }
            //console.log(vals);
        }
    }

    return list;
}