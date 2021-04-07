const date = new Date();
console.log(date);
console.log(date.getDay());
console.log(date.getMonth());
console.log('----------');

const date1 = new Date();
console.log(date1);
setTimeout(() => {
  console.log(date1);
  const date2 = new Date();
  console.log(date2);
  console.log(date2 - date1);
}, 3000);
