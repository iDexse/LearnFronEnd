// callback hell
// Pyramid of dom

// đây là call back hell
// setTimeout(function(){
//     console.log(1)
//     setTimeout(function(){
//         console.log(2)
//         setTimeout(function(){
//             console.log(3)
//             setTimeout(function(){
//                 console.log(4)
//             },1000)
//         },1000)
//     },1000)
// },1000)

var promise = new Promise(
    // Excutor
    function(resolve, reject){
        // Logic
        //Thành công: resolve()
        //Thất bại: reject()
        resolve(123)
    }
);

promise
    .then(function(a){
        console.log(a)
    })
    .catch(function(){
        console.log("Failure")
    })
    .finally(function(){
        console.log("Done!")
    });