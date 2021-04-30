let products = [ //객체 선언
    {name : '바나나',price:1200},
    {name : '사과',price:2000},
    {name : '배',price:3000},
    {name : '고구마',price:700},
    {name : '감자',price:600},
    {name : '수박',price:5000}
];

function printProduct(product) { //함수를 선언하여 출력값 지정
    console.log(`${product.name}의 가격은 ${product.price}원입니다.`)
}

for(let product of products){ //for of를 사용해서 반복
    printProduct(product);
}