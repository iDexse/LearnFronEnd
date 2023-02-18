// optional chaining (?.)
// khi nghi ngờ một key của object không tồn tại, hoặc nghi ngờ index trong array không tồn tại
const object = {
    name : "alice",
    cat : {
        name: "Dina",
        cat2 : {
            name: "Dina 1",
            cat3 : {
                name: "Dina 2"
            }
        }
    },
    getName(value) {
        console.log(value)
    }
}
object.getName?.(123)
if(object.cat?.cat2?.cat3){
    console.log(object.cat.cat2.cat3.name)
}