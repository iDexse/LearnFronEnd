/*

1. tham số?
định nghĩa
kiểu dữ liệu
tính private
1 tham số
nhiều tham số

2. Truyền tham số
1 tham số
nhiều tham số

3. Arguments?
Đối tượng arguments
giới thiệu vòng for

*/

// function writeLog(log) {
//         if(log) {
//             console.log(log);
//         }
// }

// writeLog('hello');

// function write(){
//     console.log(arguments);
// };

// write('log', 'log1');

function write(){
    var myString ='';
    for( var param of arguments){
        myString += `${param} - `
    }
    console.log(myString)
};

write('log', 'log1');