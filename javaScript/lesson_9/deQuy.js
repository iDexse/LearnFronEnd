// var array = ['a','b','c','a','b','d'];

// console.log([...(new Set(array))])

// function countDown(num){
//     if(num > 0){
//         console.log(num)
//         return countDown(num-1)
//     }
//     return num;
// }

// countDown(10)
//=============================================

// function loop(start, end, cb){
//     if( start < end){
//         cb(start)
//         return loop(start + 1, end, cb)
//     }

// }

// var array = ['javascript', 'php', 'Ruby']

// loop(0, array.length, function(index){
//     console.log(array[index])
// })

//============================================

// function giaiThua(num){
//     var output = 1;
//     for(var i = num; i > 0; i--){
//         output = output * i
//     }   
//     return output;
// }

// giaiThua(6)

//============================================

function giaiThua(num){
    if( num > 0){

        return num * giaiThua(num - 1)
    }
    return 1;
}

giaiThua(6)