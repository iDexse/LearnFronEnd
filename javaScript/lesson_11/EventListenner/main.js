// addEvenlistener là có thế gọi được nhiều
// DOM event là sẽ bị ghi đè khi gọi nhiều

var btn = document.getElementById('btn')

function viet1(){
    console.log('Viec 1')
}
function viet2(){
    console.log('Viec 2')
}
btn.addEventListener('click', viet1);
btn.addEventListener('click', viet2);

setTimeout(() => {
    btn.removeEventListener('click', viet1)// gỡ đi lắng nghe click của việc 1
}, 3000);