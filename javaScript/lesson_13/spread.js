// spread toán tử dải ..., khi sử dụng cho array hoặc object thì nó sẽ xoá mất dấu {} hoặc []

var array1 = ['javascript', 'php', 'python']
var array2 = ['java', 'C#', 'C++']

var array3 = [...array2,...array1]; // nối 2 array

var object1 = {
    name: 'JavaScipt'
}

var object2 = {
    name: 1000
}

var object3 = {
    ...object1,
    ...object3
}

console.log(object3);

var defaultConfig = {
    api: 'https://domain-trang-khoa-hoc',
    apiVersion: 'v1',
    other: 'other'
}

var exerciseConfig = {
    ...defaultConfig,
    api: 'https://domain-trang-bai-tap'// ghi đè lại api trên
}

console.log(exerciseConfig)


var array = ['javascipt','php','python']

// function logger(a, b, c){
//     console.log(a, b, c)
// }

// logger(...array)

function logger(...rest){
    for ( var i  = 0; i<rest.length; i++){
        console.log(rest[i])
    }   
}
console.log(...array)
