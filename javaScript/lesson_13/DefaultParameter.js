// truyền giá trị mặc định của tham số 
function logger(log)
{
    if (typeof log ==="underfined"){
        log = 'Gia tri mac dinh'
    }
    console.log(log)
}

function Logger(log = "gia tri mac dinh"){
    console.log(log)
}