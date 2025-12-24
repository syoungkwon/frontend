/*
배열의 forEach : 이미 만들어진 함수
보이드 함수
자기가 가지고 있는 배열의 값을 하나씩 꺼내서 함수에 대입
*/
const arr = [3, 88, 76, 9, 34, 65];

function proc(item) {
    console.log(item);
}

arr.forEach(proc);
//forEach는 
// for (let i = 0; i < arr.length; i++){
//     proc(arr[i]);
// }// 이걸 하고 있음
console.log('----------');
// 익명함수: 이름을 주지 않는 함수
// forEach는 익명함수와 함께 활용하는 일이 많음


arr.forEach((item, idx) => {
    console.log(`arr[${idx}]: ${item}`);
})
//forEach는
// for (let i = 0; i < arr.length; i++){
//     console.log(`i: arr[i]`);
// }// 이걸 하고 있음
//for of문은 내가 직접 작성해야하지만, forEach는 이미 정해진 함수니까 바로 쓰면 됨