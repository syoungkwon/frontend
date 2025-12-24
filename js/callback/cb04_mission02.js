//arr에서 짝수만 골라내고 나누기 2한 배열을 만들어 주세요

const arr = [3, 88, 76, 9, 34, 65];

const arr2 = arr.filter(item => item % 2 == 0);
const arr3 = arr2.map(item => item / 2);

const arr4 = arr
    .filter((item) => item % 2 === 0)
    .map((item) => item / 2);

console.log(arr4);

console.log('------------------');

arr.filter((item) => item % 2 === 0)
    .map((item) => item / 2)
    .forEach((item) => console.log('item:', item));
