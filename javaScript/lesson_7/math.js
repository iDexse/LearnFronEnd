console.log(Math.PI);
//Math.round(1.2), làm tròn số thập phân
//Math.abs(-1), giá trị tuyệt đối
//Math.cell(3.3), làm tròn số thập phân trên, là 3.3 = 4
//Math.floor(5.8), làm tròn số thập phân dưới, là 5.8 = 5
//Math.random(), ra dãy số ngẫu nhiên 0<1, Math.floor(Math.random()*10) là ngẫu nhiên từ 0 đến 9
var random = Math.floor(Math.random()*4);

var bonus = [
    '10',
    '20',
    '30',
    '40'
]

console.log(bonus[random])

var random2 = Math.floor(Math.random()*100);

if (random < 5){
    console.log('Cường hoá thành công')
}

//Math.min(-100, 20, 123, -1, 2) trả về dãy só nhỏ nhất
//Math.max(-100, 20, 123, -1, 2) trả về dẫy số lớn nhất