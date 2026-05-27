let obj={
    name:"Hassan Shabbir",
    class:"10-S",
    phone:"iphone 17 pro max",
    anything:function(){
    console.log(this.phone)
    return "hassan"
    }
}
console.log(obj.anything())
