// let output = "";
// for (let i = 0; i < 10 ; i ++){
//     for(let j = 0; j < 10-i ; j++) {
//         output +=' ';
//     }
//     for(let j = 0 ; j<i+1; j++){
//         output += '*';
//     }
//     output+="\n";
// }
// console.log(output);



let output = "";
for(let i = 10; i >= 0; i--){
    for(let j = 0 ; j<=i; j++){
        output +='*';
    }
    output += '\n';
}
console.log(output);

//추가 예제 삼각형만들기

for (let i = 0; i< 10; i ++){
    for(let j=0; j<10-i; j++){
        output += " ";
    }
    for (let j = 0; j< i+1; j++){
        output += "*";
    }
    for (let j = 1; j <i+1; j++){
        output += "*";
    }
    for (let j = 0; j<10-i; j++){
        output += ' ';
    }
    output += "\n";
}
console.log(output);