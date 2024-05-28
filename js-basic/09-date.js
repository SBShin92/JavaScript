let now = new Date();
console.log(now);

let time = new Date(2024, 5 - 1, 27);
console.log(time);
time = new Date(2024, 5 - 1, 27, 12, 5, 38);
console.log(time);

console.log("====================================");
let d = new Date(2012, 8, 24); // 2012년 9월 24일

console.log(d); // 2012-09-23T15:00:00.000Z
console.log("년도:", d.getYear() + 1900); // 년도: 2012
console.log("년도:", d.getFullYear()); // 년도: 2012
console.log("월:", d.getMonth() + 1); // 월: 9
console.log("일:", d.getDate()); // 일: 24
console.log("요일:", d.getDay()); // 요일: 1
d.setYear(2018);
console.log(d); // 2018-09-23T15:00:00.000Z
