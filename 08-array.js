// 배열 객체로 생성
const v1 = new Array(10);
const v2 = new Array();
const v3 = new Array(1, "ABC", true);
console.log(v1.length, v2.length, v3.length, typeof v1); // 10 0 3

// 리터럴
const v4 = [];
const v5 = ["red", "green", "blue", "yellow"];

// 객체 타입 판별
console.log(Array.isArray(v5));
const person = {
    name: "sashin",
    age: 28,
};

// 객체의 프로퍼티 접근 방법 두 가지
console.log(person.name, person["age"]);

// 인덱스를 사용할 때에는 곰곰이 생각해보자.
const arr = [];
console.log(arr.length); // 0
arr[10] = 5;
console.log(arr.length); // 11

console.log("==============================");
const veges = ["무", "배추", "쪽파"];
const sources = ["소금", "고춧가루", "새우젓"];
console.log(veges, sources);
console.log(veges.concat(sources)); // 배열 합치기
console.log(veges.concat(sources).join(", ")); // 문자열로 변환