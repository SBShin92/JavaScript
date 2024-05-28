/*
1. 구구단 for문, while문

2. 아래와 같은 계단 for문, while문
*****
****
***
**
*


*/
console.log("============== for ==============");
{
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

console.log("============== while ==============");
{
  let i = 1;
  while (++i <= 9) {
    let j = 0;
    while (++j <= 9) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

console.log("============== for ==============");
{
  for (let i = 5; i > 0; i--) {
    let tmp = "";
    for (let j = 0; j < i; j++) {
      tmp += "*";
    }
    console.log(tmp);
  }
}

console.log("============== while ==============");
{
  let i = 6;
  while (--i) {
    let tmp = "";
    let j = i;
    while (j--) {
      tmp += "*";
    }
    console.log(tmp);
  }
}

console.log("============== for in ==============");
const obj = {
  name: "sashin", age: 28, job: "router"
}
for (let key in obj) {
  console.log(`key: ${key}, val: ${obj[key]}`);
}

console.log("============== for of ==============");
const arr = ['a', 'b', 'c', 'd'];
for (let val of arr) {
  console.log(val);
}