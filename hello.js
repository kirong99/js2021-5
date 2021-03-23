let date = new Date();
h = date.getHours();

console.log(h < 3 || h > 8);
console.log(h >= 3 && h <= 8);

let type = typeof(date.getHours);
console.log(type);

const con1 ="상수선언";
console.log(con1);
con1="";

let input = 32;
if (input % 2 == 0) {
    console.log("짝수!");
}

if(input % 2 == 1) {
    console.log("홀수!");
}

console.log(date.getDate());
console.log(date.getSeconds());
console.log(date.getUTCMinutes());
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getHours());
