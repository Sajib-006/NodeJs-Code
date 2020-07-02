const fs = require('fs');

//reading files
// fs.readFile('./docs/blog1.txt', (err, data) =>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
//     console.log(data.toString());

// })

console.log("hello"); //this will executed before showing file data 

//writing files
fs.writeFile('./docs/blog1.txt', 'hi again', ()=>{   //re-write blog1 file
    console.log('file written');
})

fs.writeFile('./docs/blog2.txt', 'hi again', ()=>{   //create blog2 file
    console.log('file written');
})

//directories
if(!fs.existsSync('./dir1')){
    fs.mkdir('./dir1/', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created.');
    })
} else{
    fs.rmdir('./dir1/', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted.');
    })
}

//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err) console.log(err);
    })
    console.log('file deleted.');
}