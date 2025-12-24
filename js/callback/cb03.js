/*
배열의 filter
배열에서 필요한 아이템들만 쏙 뽑아서 새로운 배열을 만들 때 사용
조건에 따라 길이가 줄어들 수도 있겠죠....
조건 true인 값만 살리고 false인 값은 버리는 필터
*/
const arr = [3, 88, 76, 9, 34, 65];

//const oddArr = arr.filter(item => item % 2); // 0이 아니면 blooean이 true니까 생략가능
//const oddArr = arr.filter(item => item % 2 === 1);
const oddArr = arr.filter((item) => {
    return item % 2 === 1;
});
console.log(oddArr);
console.log(arr);