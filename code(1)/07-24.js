let array = [33, 234, 24, 64, 72];


//forEach 메소드
array.forEach((item,index) =>  {
    console.log(`- ${index}번째 요소는 ${item}입니다.`);
});

//map 메소드

console.log();
let outputA = array.map((item,index) => {
    return item * item; //배열의 모든 요소를 제곱해서 새로운 배열
});

console.log(outputA);

//filter 메소드
console.log();
let outputB = array.filter((item,index) => {
    return item % 2 ==0;
    // 짝수만 추출
});
console.log(outputB);