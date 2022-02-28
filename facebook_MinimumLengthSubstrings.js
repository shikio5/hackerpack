// Add any extra import statements you may need here


// Add any helper functions you may need here
function createHash(s) {
  
    let obj = {};
    s.split("").map((char, index) => {
      if (char in obj) {
        obj[char].count++;
        obj[char].indexes.push(index);
      } else {
        obj[char] = {
          count: 1,
          indexes: [index]
        }
      }
    });
    
    return obj;
  }
  
  function minLengthSubstring(s, t) {
    let sArr = s.split("");
    let hashT = createHash(t);
    let len = s.length;
    let minLen = len;
    
    let found = false;
    let i=0;
    let j=0;
    let count = Object.keys(hashT).length;
    let left = 0;
    let right = minLen - 1;
    
    while(j < len){
      let jChar = sArr[j++];
  
      if (jChar in hashT) {
        hashT[jChar].count--;
        if (hashT[jChar].count == 0) {
          count--;
        }
      }
      
      if (count > 0) {
        continue;
      }
      
      while(count == 0) {
        let iChar = sArr[i++];
        if (iChar in hashT) {
            hashT[iChar].count++;
            if (hashT[iChar].count > 0) {
              count++;
            }
        }
      } 
      
      if ((j-i) < minLen){
        left = i;
        right = j;
        minLen = (j-i);
        found = true;
      }
      
    }
    
    return found?minLen+1:-1;
  }
  
  /* NOT working
    let hashS = createHash(s);
    let hashT = createHash(t);
    
    console.log(hashS);
    
    const NOT_POSSIBLE = -1;
    let min=s.length;
    let max=NOT_POSSIBLE;
    
    for (const [key, hashTObject] of Object.entries(hashT)) {
      
      if (key in hashS && hashS[key].count >= hashTObject.count) {
        console.log("found key ", key, " index : " + JSON.stringify(hashS[key].indexes));
        max = Math.max(max, ...hashS[key].indexes);
        min = Math.min(min, ...hashS[key].indexes);
        
        console.log("found maxmin ", max, "  ", min);
      } else {
        return NOT_POSSIBLE;
      }
    }
    
    if (min == NOT_POSSIBLE || max == NOT_POSSIBLE) {
      return NOT_POSSIBLE;
    }
    
    console.log(max, "  ", min);
    return max - min + 1;
  */
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printInteger(n) {
    var out = '[' + n + ']';
    return out;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var result = (expected == output);
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printInteger(expected);
      out += ' Your output: ';
      out += printInteger(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var s_1 = "dcbefebce";
  var t_1 = "fd";
  var expected_1 = 5;
  var output_1 = minLengthSubstring(s_1, t_1);
  check(expected_1, output_1);
  
  var s_2 = "bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf";
  var t_2 = "cbccfafebccdccebdd";
  var expected_2 = -1;
  var output_2 = minLengthSubstring(s_2, t_2);
  check(expected_2, output_2);
  
  
  var s_2 = "asdfjkkljahfkasjdhaskkfz";
  var t_2 = "zd";
  var expected_2 = 8;
  var output_2 = minLengthSubstring(s_2, t_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  