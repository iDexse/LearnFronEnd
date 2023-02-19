// DOM event
// 1. Atribute Event sử dụng thuộc tính để dùng event
// 2. Assign event using the element node, dùng element để xài event

// onclick chạy khi click
// onmouseover di chuột vào là chạy


var h2Element = document.querySelectorAll('h2')

for (var i = 0; i< h2Element.length; i++){
    h2Element[i].onclick = function(e){
        console.log(e.target)
    }
}
// h2Element.onclick = function(event){
//     console.log(e)
// }