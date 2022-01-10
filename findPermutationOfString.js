const findPermutationOfString = (s) => {
    if (s == null || s == "") {
        return "";
    }

    let len = s.length;
    if (len == 1) {
        return s;
    }


    let result = [];
    for (let i = 0; i < len; i++) {
        const currentChar = s[i];
        const remainingChars = s.slice(0, i) + s.slice(i + 1);
        for (let j = 0; j < remainingChars.length; j++) {
            let word = currentChar + findPermutationOfString(remainingChars)[j];
            result.push(word);

        }
    }
    return result;
}

console.log(findPermutationOfString("lol"));

let tests = {
    "dog": ['dog', 'dgo', 'odg', 'ogd', 'gdo', 'god'],
    "lol": ['llo', 'lol', 'oll'],
    "test": ['test', 'tets', 'tset', 'etst', 'etts', 'estt', 'stet', 'stte', 'sett', 'ttes', 'ttse', 'tets'],
    "fancy": [
        'fancy', 'fanyc', 'facny',
        'fnacy', 'afncy', 'afnyc',
        'afcny', 'anfcy', 'nfacy',
        'nfayc', 'nfcay', 'nafcy',
        'cfany', 'cfayn', 'cfnay',
        'cafny', 'yfanc', 'yfacn',
        'yfnac', 'yafnc'
      ]
};

Object.entries(tests).forEach(keyPair => console.log("Expected: " + keyPair[1], " || Actual: " + keyPair[1].every(e => Array.from(findPermutationOfString(keyPair[0])).includes(e))));