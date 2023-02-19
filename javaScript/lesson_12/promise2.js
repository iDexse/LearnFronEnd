//1. promise.resolve() luôn thành công
//2. promise.reject() luôn thất bại
//3. promise.all chạy song song


var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1])
    }, 2000);
})
var promise2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve([2, 3])
    }, 5000)
})
// all nếu một promise reject thì chuyển luôn sang .catch
Promise.all([promise1,promise2]) // promise bên trong chạy xong thì mới chạy .then bên dưới
    .then((result)=>{ 
            var result1 = result[0]
            var result2 = result[1]
            console.log(result1.concat(result2))
    })