function myFunction(param){
    if( typeof param === "function"){
        param();
    }
}

function myCallBack(value){
    console.log(value)
}

myFunction(myCallBack(123))
