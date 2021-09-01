// toFixed 메소드 원하는 소수점에서 자른다.
let number = 531.21853215

console.log(number.toFixed(1));
console.log(number.toFixed(4));

//toExponential 메소드 사용한 지수값을 리턴한다.

let num = 6.3156;
let n=num.toExponential(2);

console.log(n);

//toPrecision 메소드 고정소수점 또는 지수표기법의 수를 반올림한 문자열을 반환

let foo = 3.45324;

console.log(foo.toPrecision());
console.log(foo.toPrecision(2)); //반올림 돼서 표현됌
console.log(foo.toPrecision(4));


//MAX_VALUE 속성
let numberA = Number.MAX_VALUE;
let numberB = Number.MAX_VALUE+1;

console.log(numberA);
console.log(numberB);

//Infinity로 변환되는 숫자
let addNumber = Number('0.0000000000000001e+308');
let number1 = Number.MAX_VALUE + addNumber;

console.log(number);