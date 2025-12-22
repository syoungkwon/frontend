/*
객체가 가지고 있는 key(속성명)를 순차적으로 준다.
*/

const person1 = {
    name: '김철수',
    age: 25,
    married: false
};

for (const key in person1) {
    console.log('key:', key);
}

// person1객체가 가지고 있는 value를 출력

console.log(person1.name);
//이렇게 쓰려면 정확하게 key값을 알아야함. key값이 바뀌면 undefined가 됨
// for in문을 사용하면 key값을 알지 못해도 vaule를 호출할 수 있음
// 자주쓰냐 물으면 자주 쓰지 않음

for (const key in person1) {
    console.log('value:', person1[key]);
}

let value = '';
for (const key in person1) {
    value += `${person1[key]} `;
}
console.log(value);