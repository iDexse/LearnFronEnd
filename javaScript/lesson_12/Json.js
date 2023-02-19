// JSON là định dạng dữ liệu
// JavaScript Object Notation
// JSON: Number, Bool, Null, Array, Object, string
// mã hoá/ giải mã(encode/decode)
//(Stringify: từ Javascript types sang JSON/parse: từ JSON sang Javascripts types)


// var json = '{"name": "Đức Nghĩa", "age": 18}';

var a = '1';

console.log(JSON.parse(a)) //đổi từ JSON sang kiểu javaScript

var b = "Đức NGhĩa"

console.log(JSON.stringify(b)) // đổi từ javaScript sang JSon

