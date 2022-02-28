function findSignatureCounts(students) {
    let numOfPeople = students.length;
    let numSignPerPerson = new Array(numOfPeople);
    //numSignPerPerson = numSignPerPerson.fill(1); // everyone signs themselves
    let start = 0;
    let next;
    let curr;
    for (let i = 0; i < numOfPeople; i++) {
        start = students[i];
        let count = 1;
        next = students[start - 1];
        while (next != start) {
            curr = next;
            next = students[curr - 1];
            count++;
        }
        numSignPerPerson[i] = count;
    }
    return numSignPerPerson;
}

const assertEquals = (expected, actual) => {
    
    let expectedValue = JSON.stringify(expected);
    let actualValue = JSON.stringify(actual);
    let isEqual = expectedValue === actualValue;

    if (!isEqual) {
        console.error("Expected:" + expectedValue + " but Actual:" + actualValue);
    }
    return isEqual;
}

let expected = [2,2];
console.log(assertEquals(expected, findSignatureCounts([2, 1])));

expected = [1,1];
console.log(assertEquals(expected, findSignatureCounts([1, 2])));

expected = [3,2,2,3,3];
console.log(assertEquals(expected, findSignatureCounts([4,3,2,5,1])));
