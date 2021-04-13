// code5-1 익명함수

// let foo = function() {
//     console.log("첫번줄");
//     console.log("두번째 줄");
// }

// foo();
// console.log(foo);

// code 5-2 선언적 함수
// function foo() {
//     console.log("첫번줄");
//     console.log("두번째 줄");
// }

// foo();
// console.log(foo);

//code 5-3 화살표 함수

// let foo = () => {
//     console.log("첫번줄");
//     console.log("두번째 줄");
// }

// foo();
// console.log(foo);

// let foo = () => console.log("첫번줄"); 이렇게 간단하게 바꿀 수도 있다.

// 예제5-1

function power(x){
    return x * x;
}

console.log(power(10));
