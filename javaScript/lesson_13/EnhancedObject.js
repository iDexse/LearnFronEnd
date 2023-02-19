//1. định nghĩa key:value cho object
//2. định nghĩa method cho object
//3. định nghĩa key cho object dưới dạng biến

var name = "python";
var price = 100
var course = {
    name,
    price,
    getName(){
        return this.name;
    }
}

console.log(course)

var fieldName = 'name';
var fieldPrice ='price'

const course = {
    [fieldName]: 'javascript',
    [fieldPrice]: 1000
}
// array thành obj
function arrToObj(arr) {
    return arr.reduce((acc, item)=>{
       acc[item[0]] = item[1]
       return acc
    }, {})
 }
