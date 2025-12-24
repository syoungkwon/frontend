const arr = [3, 88, 76, 9, 34, 65];

const arr70 = arr.filter(item => item <= 70);
console.log(arr70);

// const arr3 = arr.filter((item, i) => {
//     return i < 4
//});

const arr3 = arr.filter((item, i) => i < 4); 
// filter(아이템, 인덱스) 순서가 중요함 두번째가 인덱스
console.log(arr3);
