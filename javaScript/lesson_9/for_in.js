var myInfo = {
    name: 'Đức Nghĩa',
    age: 21,
    address: 'Ha Noi, VN'
}

for (var key in myInfo){
    console.log(key)
}

function run(object) {
    var array = []
    for(var key in object){
        array.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return array
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));