function abs(num) {
    if (num < 0) {
        console.log(-num);
    } else {
        console.log(num);
    }
}
function abs2(num) {
    console.log(num < 0 ? -num : num);
}

function abs3(num) {
    let val = num;
    if (val < 0) { val = -val; }
    console.log(val);
    //원본값을 건들지 않도록 한다
    // 만일 이 코드를 쓰고 싶다면 원본값은 그대로 두되 복사를 하는 게 좋다
}

abs(10); //console에 10출력
abs(-20); //console에 20출력
abs2(-65); 
abs3(-14); 