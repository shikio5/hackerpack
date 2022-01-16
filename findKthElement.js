function findKthElement(a, kth){
    return a.sort((a,b)=> {return a - b;})[a.length - kth];
}

console.log(findKthElement([1,2,3,66,4,5,6,100,99,55,33], 3));

