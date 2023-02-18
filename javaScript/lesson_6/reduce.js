var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'html, css',
        coin: 0
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 400
    }
]

// var totalCoin = 0

// for ( var course of courses){
//     totalCoin += course.coin
// }

// console.log(totalCoin)
var i = 0
var coinHandler = function(accumulator, currentValue, currentIndex, originArray){
    i++
    console.table({
        'lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khoá học: ': currentValue.coin,
        'Tích trữ được: ': total
    })
    return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0)
// accumulator, lần đầu tích trữ cái gì thì trả về cái đó, trong function return cái gì thì accumulator lưu trữ cái đó
// reduce trả về một giá trị duy nhất