var languages = [
    'javasscript',
    'php',
    'python'
]
var myInfo = {
    name: 'Đức Nghĩa',
    age: 21,
    address: 'Ha Noi, VN'
}
for (var value of languages){
    console.log(value)
}

for (var value of Object.keys(myInfo)){
    console.log(value)
}
