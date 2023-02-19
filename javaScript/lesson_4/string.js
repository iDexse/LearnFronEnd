var fullname = "hi";
var fullname1 = new String("hi")

var name = "xin chào tất cả các"
+ "bạn \"mình là nghĩa\"";

var name1 = "đây là gạch chéo ngược \\"

var firstName = "Đức"
var lastName = "Nghĩa"
// xem độ dài chuỗi dùng length
console.log(name1.length)

console.log(`tôi là: ${firstName} ${lastName}`)

var myString = "tôi đang học js tại js F8"

// 1. length
// 2. Find Index tìm vị trí ký tự trong chuỗi, không thấy thì = -1
console.log(myString.indexOf("js", 15)) 
// 15 phía sau là vị trí trong chuỗi bắt đầu tìm kiếm ký tự của indexOf
// lastIndexOf trả về ví trí của cùng ký tự tìm cuối cùng trong chuỗi
// search khá giống indexOf
// 3. cut string
console.log(myString.slice(9, 20))
// slice(-3) cắt ngược
// 4. replace
console.log(myString.replace('js', 'JavaScripts'))
// replace(/js/g,'JavaScripts), thay thế toàn bộ ký tự js trong chuỗi, /js/g là biểu thức chính quy
// 5 convert to upper case
// 6. conver to lower case
console.log(myString.toUpperCase())  
// 7. trim loại bỏ khoảng trắng ở đầu và cuối chuỗi
console.log(myString.trim())
// 8. Split sẽ trả về mảng
var languages = "JavaScript, PHP, Ruby"
console.log(languages.split(','))
console.log(languages.split(''))
// 9. get a character by index
const myString2 = 'Đức Nghĩa'
console.log(myString2.charAt(4))
console.log(myString2[5])
