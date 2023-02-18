var languages = [
    'javascripts',
    'php',
    'python',
]
var languages2 = [
    'java',
    'dart',
    'ruby',
]
console.log(languages.join('-'))
// join là array thành chuỗi, '-' bị ngăn cách phần tử bằng dấu gạch ngang
console.log(languages.pop())
// pop xoá phần tử cuối mảng và trả về phần tử đã xoá
console.log(languages.push('Dart', 'C#'))
// push thêm phẩn tử vào cuối mảng
console.log(languages.shift())
// shift xoá phần tử đầu mảng và trả về phần tử đã xoá
console.log(languages.unshift('Dart', 'C#'))
// unshift thêm phần tử vào đầu mảng
console.log(languages.splice(1, 2, 'Dart'))
// splice chọn vị trí phần tử trong mảng và số lượng cần xoá, có thể thêm một phần tử ngay vị trí chọn phần tử
console.log(languages.concat(languages2))
//concat hợp nhất 2 mảng
console.log(languages.slice(0, 1))
// slice cắt phần tử từ vị trí này tới vị trí kia của mảng từ trái qua phải