const fs = require('fs');

const rs = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf-8'});
const ws = fs.createWriteStream('./docs/blog4.txt');

rs.on('data',(chunk) =>{
    console.log('.....NEW CHUNK.....');
    console.log(chunk);
    ws.write('------------------------NEW CHUNK------------------------------');
    ws.write(chunk);
})

//piping
//rs.pipe(ws)

