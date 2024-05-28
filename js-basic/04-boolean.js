// 단순 선언, undefined
let v1;
console.log(`let v1; : ${v1}, ${typeof v1}`);


// null, undefined 직접 할당
let v2 = null;
console.log(`let v2 = null; : ${v2}, ${typeof v2}`);
v2 = undefined;
console.log(`v2 = undefined; : ${v2}, ${typeof v2}`);


// ==, ===
console.log(`v1 == null ? ${v1 == null}, v1 === null ? ${v1 === null}`);
// -> 즉, null과 undefined는 서로 값은 같지만 타입이 다르다.
console.log(`v2 == null ? ${v2 == null}, v2 === null ? ${v2 === null}`);

// Boolean: 값의 존재유무 확인
console.log(Boolean("exist!!"), Boolean(""));
console.log(Boolean(2024), Boolean(0));

// &&의 경우, 최종 만족값이 리턴된다.
console.log(true && "Test"); // Test
console.log(false && "Test"); // false

// ||의 경우, 처음 만족한 값이 리턴된다.
console.log(true || "Test"); // true
console.log(false || "Test"); // Test
