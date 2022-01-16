// n building
// input [4,2,3,1]
// output [0,2,3]

const findAllBuildingsWithOceanView = (a) => {
    console.log("input: ", a)
    let result = [];
    let len = a.length;
    let tallest = 0;

    for (let i=len-1; i>=0; i--){
        let height = a[i];
        if(height > tallest) {
            tallest = height;
            result.push(i);
        }
    }

    console.log("output: ", result.reverse());
}



let tests = [[4, 2, 3, 1][4, 3, 2, 1], [1, 3, 2, 4]];
//tests.map(test => console.log(test));

//findAllBuildingsWithOceanView([2,2,2,2]);