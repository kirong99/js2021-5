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

//code 5-4 함수의 기본 형태
// function power(x){
//     return x * x;
// }

// console.log(power(10));
// ///
// function foo(x){
//     let bar =x * x;
//     return bar;
// }

// let foobar = foo(10);
// console.log(foobar);

//code 5-5 매개변수가 여러개인 함수
// function foo(a,b){
//     return a * b;
// }
// console.log(foo(52,10));
// console.log(foo(100,40));

//code 5-6 리턴이 없는 함수
// function print(message) {
//     console.log(`"${message}"라고 말했습니다.`);
// }
// print("안녕하세요");

//code 5-11 함수의 매개변수 초기화
// 함수 선언
// function print(name,count){
//     if(!count){
//         count=1; //count가 undefined일 때 1로 초기화
//     }
//     console.log(`${name}이/가 ${count}개 있습니다`)
// }

// print("사과");

// code5-14 콜백 함수
// function TenTimes(foo){
//     for (let i = 0; i<10; i++){
//         foo();
//     }
// }
// TenTimes(function (){
//     console.log("함수 호출");
// });


// //code 5-15 표준 내장 함수
// let inputA = '52';
// let inputB = '52.273';
// let inputC = '1403동';

// // parseInt의 기본적인 사용
// console.log(parseInt(inputA));
// console.log(parseFloat(inputA));

// // parseInt와 parseFlaot의 차이
// console.log(parseInt(inputB));
// console.log(parseFloat(inputB));

// // 문자열 뒤에 숫자가 아닌 문자가 있을때
// console.log(parseInt(inputC));


// //code 5-16 타이머함수
// //1초 후에
// setTimeout(() =>{
//     console.log("1초 경과");
// },1000); //시간 지정

// //1초 마다
// setInterval(()=> {
//     console.log("1초");
// },1000);//시간 지정

//code5-17 clearInterval함수
//1초마다
let id = setInterval(() => {
    console.log("1초");
},1000);

//3초후에

setTimeout(()=> {
    clearInterval(id);
},3000);