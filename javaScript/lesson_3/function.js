/* các loại function
    1. declaration function
    2. Expression function
    3. Arrow function
*/
// declaration function có thể gọi trước khi định nghĩa
function showMessage(){
    console.log("Declaration function")
}

// Expression function không thể gọi trước khi định nghĩa
var showMesssage2 = function(){
    console.log("Expression function")
}

setTimeout(function(){

})

var myObject = {
    myFunction: function testName(){

    }
}