const arr = [3, 88, 76, 9, 34, 65];

//arr 배열에서 짝수만 +2한 새로운 배열 만들기

const arr2 = arr.map(item => {
    if (item % 2 === 0) {
        item = item + 2;
    }
    return item;
})

const arr3 = arr.map(item => {
    if (item % 2 === 1) {
        return item;
    }
    return item + 2;
});

const arr4 = arr.map(item => item % 2 ? item : item + 2);
// item % 2 

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);