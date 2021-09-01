let output = ""; //화면에 프린트해줄 변수
for (let i = 0; i < 10; i++) { //i는 0부터 9까지 i를 하나씩 증가시킨다.
    for(let j = 0; j< i+1;j++){ //j는 0부터 i까지 j를 하나씩 증가시킨다.
        output += "*"; //output에 있는 데이터에 *을 하나씩 추가
    }
    output +="\n"; //다음줄로 이동
}
console.log(output);