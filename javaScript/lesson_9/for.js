
for (var i = 1; i <= 1000; i++){
    console.log(i);
}

function getTotal(arr) {
    var sum = 0;
    for( var i = 0; i < arr.length; i++){
         sum += arr[i]
    }
    return sum
}

console.log(getTotal([2,5,3]))