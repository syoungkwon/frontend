(function () {
    var name = "홍길동"
    var message = `안녕하세요 ${name}`;
    console.log(message);

    var fun1 = () => { console.log("I am fun1...") }
    var fun2 = x => {console.log(`I am fun2... ${x}`)}
    var fun3 = (x, y) => { console.log(`I am fun3... ${x}, ${y}`) }
    fun1()
    fun2(10)
    fun3(10, 20)
    
    let data = "hello";
    if (true) {
        let data = "world"
    }// scoping이 지원된다면 변화가 안됨!
    console.log(data);
})()