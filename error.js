let a=50
let b=8

try{
    if (b==0){
        throw "division by zero error"
    }
    else console.log(a/b)
}

catch{
    console.log("error captured")
}