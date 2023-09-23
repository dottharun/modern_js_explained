// index.js
console.log("Hello from JavaScript!");

//since moment.min .js is loaded before in HTML i can use moment in js now
console.log(moment().startOf("day").fromNow());
