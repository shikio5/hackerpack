function getUniqueArray(a) {
    return [...new Set(a)];
  }

function sym(args) {
    if (args == null || args.length == 0) {
        return [];
    }
    let result = {};
   
    Object.values(arguments).map(e => {
        let unique = getUniqueArray(e);
        unique.map(f => {
            if (f in result) {
                delete result[String(f)];
            } else {
                result[String(f)] = '';
            }
        });
    });
    

    return Object.keys(result).map(e => parseInt(e));
}

let result = sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);

console.log(result);

let tests = {
    "baseCase": [[1, 2, 3], [5, 2, 1, 4]],
    "longestCase": [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]],
    "test1":[[1, 2, 3, 3], [5, 2, 1, 4]]
};
/*
Object.entries(tests).forEach(keyPair => console.log("Expected: " + keyPair[0], " || Actual: " + keyPair[1].every(e => {
    let result = sym(keyPair[1]);
    console.log("result: " + result);
    Array.from(result).includes(e)}
)));
*/