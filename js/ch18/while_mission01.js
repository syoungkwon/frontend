/*
1,2,3,4, 식으로 계속 합계를 구한다.
합계 값이 100이 넘어간 순간의 마지막 더한 값 출력
*/

let i = 1;
let result = 0;
while (true) {
    result += i;
    if (result > 100) {        
        console.log(result, i);
        break;
    }
    i++;
}