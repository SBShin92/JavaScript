// number form
let n1 = 2024;
let n2 = Number(2024);
console.log(n1, n2);
console.log(typeof n1, typeof n2);

// binary, octal, hexadecinal
const hex = 0xff0000;
const oct = 0o10;
const bin = 0b1101;
console.log(hex, oct, bin);

// Math func
console.log(Math.round(3.567), Math.trunc(3.567), Math.floor(3.567));
console.log(Math.min(1, 4, 3, 5, 6, 2), Math.max(1, 4, 3, 5, 6, 2));

// =============== casting ==================
console.log("=============== casting ==================");

console.log(parseInt("011"), typeof parseInt("011"));
console.log(parseInt("011", 2)); // 2진법

console.log(parseInt("0b1000")); // 안됨
console.log(parseInt("0o1000")); // 안됨
console.log(parseInt("0x1000")); // 됨
console.log("--------------------------------------");

console.log(parseInt("123.456")); // 정수만 반환하고 나머지는 버린다.
console.log(parseInt("456이라구"));
console.log(parseInt("이게789?")); // NaN, Not a Number

console.log(parseFloat("123.456")); // float 파싱

console.log("------------ baNaNa~ ----------------");
console.log("b" + "a" + + "www" + "a");

console.log("------------ Infinity~ ----------------");
console.log(1 / 0, -1 / 0);
