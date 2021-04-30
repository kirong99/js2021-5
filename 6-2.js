let fruit = {
    name : '사과',
    price: 1200,
    origin : '한국'
};
for (let key in fruit){
    console.log(`${key}: ${fruit[key]}`);
}