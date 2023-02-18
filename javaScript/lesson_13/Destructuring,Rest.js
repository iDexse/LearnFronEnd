// Destricturing: phân rã để lấy ra phẩn tử trong array và object dễ dàng

var array = ['Javascript', 'Python', 'PHP']

var [a, b, c] = array; // [] đặt tên gì cx đc

var [a, ...rest] = array; //là toán tử Rest(rest là tên biến, đặt gì cx đc) để lấy ra đc những phần tử còn lại trừ a
console.log(rest)
var [a, , c] = array; //chỉ lấy đầu và cuối

console.log(a)

var course = {
    name: 'PHP',
    price: 1000,
    img: 'img-address',
    children: {
        name: 'nodeJS'
    }
}

var {name, price} = course; // {} phải đặt đúng tên trong object

var {name, ...rest} = course;

// lấy phần tử object con trong một object cha
var {name: parentName, children: {name}} = course;// name: parentName(parentName có thể đặt tên gì cx đc) là đổi tên từ name sang parentNam

var {description = 'giá trị mặc định'} = course;// thêm một giá trị không có trong object

function logger(...params){ // là toán tử Rest nếu xài ... ở tham số, ... là lấy phần còn lại
    console.log(params);
}

logger(1,2,3,4,5,5,6,7,8)// ... ở trên tạo thành array

function Logger({name, price, ...rest}){
    console.log(name)
    console.log(price)
    console.log(rest)
}

logger({
    name: "php",
    price: 10000
    
})