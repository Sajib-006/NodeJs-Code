//Global object
console.log(global);

setTimeout(() =>{
    console.log('in the timeout');
    clearInterval(interval);
},3000);

const interval = setInterval(() => {
    console.log('In the interval');
}, 1000);

console.log(__dirname);
console.log(__filename);