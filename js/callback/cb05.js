/**
배열의 reduce함수, 배열을 하나의 값으로 변경하고 싶을 때 사용

 */
const arr = [3, 88, 76, 9, 34, 65];

const result = arr.reduce((prev, current) => {
    //prev는 이전에 return한 값
    //current는 현재 값

    // 1. 최초만 0번방이 prev 파라미터로 들어오고, 1번방 값이 current 파라미터로 들어간다
    return prev + current;
    // 3+ 81 = 91
    // 2. 두번째 들때 prev에 91(이전에 리턴한 값), current에 2번방 값인 76 // 91+76 = 167
    // 3. prev(167) + current(9) = return(176)
    // 4. prev(176) + current(34) = return(210)
    // 5. prev(210) + current(65) = return(275) 이 마지막 return 값이 reduce의 결과로 나옴
})
console.log(result);
// 성능 안좋아서 잘 안씀...


const result2 = arr.reduce((prev, current) => {
    return prev + current;
}, 0);
console.log(result2);

// 최초의 prev에 0번방 값이 아닌 0이 들어감. 초기값을 정하고 싶을 때 사용
// 첫번째 아규먼트는 함수의 주소값
// 두번째 아규먼트(0)이 최초 prev 값으로 쓰인다