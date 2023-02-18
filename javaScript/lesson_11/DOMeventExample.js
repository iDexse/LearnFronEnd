var inputText = document.querySelector('input[type="text"]')
var inputCheck = document.querySelector('input[type="checkbox"]')
var selectElement = document.querySelector('select')
var inputValue

// inputText.oninput = function(e){
//     inputValue = e.target.value // mỗi khi gõ sẽ lưu value vào biến 
// }

inputCheck.onchange = function(e){
    console.log(e.target.checked) // true hoặc false
}

selectElement.onchange = function(e){
    console.log(e.target.value)
}

inputText.onkeydown = function(e){
    console.log(e.which)

    switch(e.which){
        case 27: // 27 là nút esc
            console.log('Exit')
            }
}
document.onkeydown = function(e){ // thực hiện ở web luôn
    
}
//.onkeypress là nhấn thôi là chạy(trừ nhút esc là không nhận)
