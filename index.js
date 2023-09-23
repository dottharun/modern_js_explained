import moment from "moment";

console.log("Hello from JavaScript!");
console.log(moment().startOf("day").fromNow());

const name = "Bob",
  time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
