var myNumber = 'number';
var myInfo = {
    name: 'Đức Nghĩa',
    age: 18,
    address: 'Đà Lạt, VN',
    [myNumber]: 0981787482,
    getName: function() {
        return this.name
    }
}
delete myInfo.age;
// xoá một key-value;
var myKey = 'address'
myInfo.email = '123@gmail.com' //myInfo['my-email']
// thêm key-value mới vào
console.log(myInfo.name) // console.log(myInfo[myKey]) lấy từng key-value thông quan biến
// lấy từng key-value 
