//현재 시간에 1년,11개월,3일을 더해서 출력

let date = new Date();


console.log(date);

date.setFullYear(date.getFullYear()+1);
date.setMonth(date.getMonth()+11);
date.setDate(date.getDate()+3);

console.log(date);


//시간 간격 구하기 getTime 메소드:유닉스 타임
let now = new Date();
let before = new Date('December 9, 1991');

let interval = now.getTime() - before.getTime();
interval= Math.floor(interval/(1000*60*60*24));
console.log(`태어나도 ${interval}일 지났습니다`);