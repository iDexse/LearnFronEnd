var promise = new Promise(
    function(resolve, reject){
        resolve();
})

promise
    .then(function(){
        return 1// khi return về một promise thì phải đợi promise đc chạy xong thì mới chạy .then tiếp theo
        // return new Promise((resolve, reject) => {
        //     setTimeout(resolve(), 3000)
        // })
    })
    .then(function(data){
        console.log(data)
        return 2
    })
    .then(function(data){
        console.log(data)
        return 3
    })

function sleep(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function(){
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2)
        return sleep(1000);
    })
    .then(function(){
        console.log(3)
        return sleep(1000);
    })
    .then(function(){
        console.log(3)
        return sleep(1000);
    })