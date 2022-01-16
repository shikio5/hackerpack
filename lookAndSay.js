/*
1
11
21
1211
111221
312211
13112221
1113213211
31131211131221
13211311123113112211
*/

console.log(lookAndSay(12333, 10));

function lookAndSay(number, numRows) {
    number = String(number);
    console.log(number);
    for (let x=0; x < numRows; x++) {
        let trackingValue = "";
        let output = "";
        let arrayNum = number.split('');
        let len = arrayNum.length;
        trackingValue = arrayNum[0];
        let countValue = 1;  
        for (let i=1; i<len; i++) {
            if (trackingValue == arrayNum[i]){
                countValue++;
            } else {
                output += String(countValue) + String(trackingValue);
                trackingValue = arrayNum[i];
                countValue = 1;
            }
        }
        output += String(countValue) + String(trackingValue);
        console.log(output);
        number = output;
    }
    return "FINISHED!";
}