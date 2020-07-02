const fs = require('fs');

const rs = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf-8'});

rs.on('data',(chunk) =>{
    console.log('.....NEW CHUNK.....');
    console.log(chunk);
})