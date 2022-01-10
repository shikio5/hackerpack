function updateInventory(arr1, arr2) {
    let result = Object.fromEntries(arr1.map(a => a = a.reverse()));

    arr2.forEach(arr => {
        let key = arr.pop();
        let val = arr.pop();
        if (key in result) {
            result[key] += val;
        } else {
            result[key] = val;
        }
    });

    let out = Object.entries(result).map(arr => arr = arr.reverse());
    out = out.sort((a, b) => a[1].localeCompare(b[1]));

    return out;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));