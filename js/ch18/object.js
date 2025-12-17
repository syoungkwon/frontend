/* object.js 
자바스크립트에서 객체를 만드는 방법

객체는 (속성)과 (메소드)로 이루어질 수 있다.
키(속성/쉽게 생각하자면=변수):값
key: value(속성값 or 함수(function))

여러 정보를 한 묶음으로 나타낼 수 있다.

상수 person1에 저장되는 값은 객체의 주소값 하나 (비유하자면 짐이 많이 든 가방과, 가방의 좌표값)
상수 person1은 주소값을 담는 공간!
상수가 객체를 가리킬 수 있다.
RAM: CPU에서 사용하는 메모리 용량. 휘발성 메모리. 컴퓨터 끄면 날아감

객체의 주소값을 알면 속성값 읽기/쓰기, 메소드 호출 가능
주소값. 주소값 쩜 ->
*/

const person1 = {
    name: '김철수',
    age: 25,
    married: false,
    run: function () { console.log('나는 뛴다!!!')}
}; //객체를 만드는 문법

const person2 = person1 // shallow copy (얕은 복사, 주소값 복사)
// 객체 자체를 복사하는 것은 deep copy(깊은 복사, 객체 복사)

console.log('person1.name:', person1.name);
console.log('person2.name:', person2.name);

person1.name = '홍길동';
person2.age = 30;

console.log('person1.name:', person1.name);
console.log('person2.name:', person2.name);
console.log('person1.age:', person1.age);
console.log('person2.age:', person2.age);

person1.run();


const person3 = {
    name: '김철수',
    age: 25,
    married: false,
}; 
//동등성, 동일성
// 같은값을 가지고있는 동등성을 가지고 있지만, 동일하진 않음
// person1 / person2 동일
// person1 / person3 동등