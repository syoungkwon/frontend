console.log('spread.....');
var array1 = [10, 20, 30];
var array2 = [1, 2, ...array1];

console.log(array1);
console.log(array2);
///////////// 배열 복제

var obj = {
    data1: 'hello',
    data2:10
}
var obj2 = {
    ...obj,
    data: true
}
console.log(obj2);
////////////////// 객체 복제

console.log('rest parameter.......................');

function some(x, y, ...z) {
    console.log(z.length);
    z.forEach(arg => {
        console.log(arg)
    });
}
some(1, 2, "hello", true, 2);

console.log('destructed assignment.....................')

var obj3 = {
    data1: 'hello',
    data2: 10,
    data3:true
}

let { data1: a1, data2: a2 = 20, data3: a3, data4: a4 = 'world' } = obj3;
console.log(`${a1}, ${a2}, ${a3}, ${a4}`)