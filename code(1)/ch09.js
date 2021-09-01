// console.log(`-process.arch:`,process.arch);
// console.log(`-process.connected:`,process.connected);
// console.log(`-process.platform:`,process.platform);
// console.log(`-process.execArgv:`,process.execArgv);
// console.log(`-process.exitCode:`,process.exitCode);
// console.log(`-process.mainModule:`,process.mainModule);
// console.log(`-process.release:`,process.release);
// console.log(`-process.memoryUsage():`,process.memoryUsage);
// console.log(`-process.uptime():`,process.uptime);

// //강제종료
// process.exit();


// // 위에서 강제 종료되어 실행되지않음.
// console.log(`테스트`);
// console.log(`테스트`);
// console.log(`테스트`);


const os = require('os');

console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.arch());
console.log(os.release());
console.log(os.uptime());
console.log(os.loadavg());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());
console.log(os.networkInterfaces());


//동기적으로 파일 읽기
// const fs = require('fs');
// const { readFileSync } = require('fs');

// const file = fs.readFileSync('textfile.txt');
// console.log(file);
// console.log(file.toString());


//비동기적으로 파일 읽기

// fs.readFile('textfile.txt',(error,file)=> {
//     console.log(file);
//     console.log(file.toString());
// });


//여러 파일 비동기적으로 읽기
// const a = readFileSync('a.txt');
// const b = readFileSync('b.txt');

// console.log(a,b);

//동기적으로 파일 쓰기

// const fs = require('fs');

// fs.writeFileSync('output.txt','안녕하세요!');
// console.log('파일 쓰기를 완료했습니다.');

//비동기적으로 파일 쓰기

// const fs = require('fs');

// fs.writeFile('output1.txt','안녕하세요!',(error) => {
//     console.log(`파일 쓰기를 완료했습니다.`);
// });

// cheerio 모듈을 이용해서 한빛 미디어 책 제목과 저자 출력

const request = require(`request`);
const cheerio = require(`cheerio`);

const url = `http://www.hanbit.co.kr/store/books/new_books_list.html`;
request(url,(error,respose,body) => {
    const $ = cheerio.load(body);

    $(`.view_box`).each((index,element)=>{
        const title = $(element).find(`.book_tit`).text().trim();
        let writer = $(element).find(`.book_writer`).text().trim();
        writer = writer.split(`,`).map((item)=>item.trim());
        console.log(title);
        console.log(writer);
        console.log();
    });
})

