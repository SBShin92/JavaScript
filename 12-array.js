// ============== for each ================
function testForEach() {
  let source = ["Banana", "Orange", "Apple", "Mango"];
  source.forEach((item, idx, arr) => {
    console.log(item, idx, arr);
  });
}

testForEach();
console.log("=======================================");

// ============= some, every ====================
function testSomeEvery() {
  let data = [
    { name: "홍길동", age: 28 },
    { name: "장길산", age: 35 },
    { name: "전우치", age: 25 },
  ];
  let result = data.some((x) => {
    return x.age > 30;
  });
  console.log("some:", result);

  result = data.every((x) => x.age > 30);
  console.log("every:", result);
}

testSomeEvery();
console.log("============== Filter ====================");

function testFilter() {
  let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let resultEvery = source.every((item) => item % 2 === 0);
  let resultSome = source.some((item) => item % 2 === 0);
  let resultFilter = source.filter((item) => item % 2 === 0);
  console.log(resultEvery, resultSome, resultFilter);
}
testFilter();
console.log("============ Map ==================");

function testMap() {
  let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let multiply = source.map((item) => item * 2);
  console.log(source);
  console.log(multiply);
}
testMap();

console.log("============= Reduce =================");
function testReduce() {
  let a = 5;
  let arr1 = [12, 4, 19, 33, 86];
  let sum = arr1.reduce((acc, val, idx, arr) => {
    console.log(`누산값: ${acc}`);
    console.log(`${arr}의 ${idx}번째 요소의 값 ${val}`);
    return acc + val;
  }, -112);
  console.log(sum);
}
testReduce();

console.log("============= Reduce2 =================");
function testReduce2() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers);
  let result = numbers.reduce((acc, val) => {
    acc.push(val * 2);
    console.log(`acc: ${acc}`);
    return acc;
  }, []);
  console.log(result);
}
testReduce2();

console.log("========== arrEx ===============");
function testEx() {
  let arrEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let res = arrEx
    .map((x) => x * 2)
    .filter((x) => x % 2 == 0)
    .sort((x, y) => y - x)
    .reduce((acc, val, idx, arr) => {
      if (idx % 2 == 0) arr.splice(idx, 1);
      return arr;
    });
  console.log(res);
}
testEx();

console.log("========== testReduce3 ===============");
function testReduce3() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(numbers);
  let result = numbers.reduce((acc, val) => {
    if (val % 2 == 0) acc.push(val);
    return acc;
  }, []);
  console.log(`result: ${result}`);
}
testReduce3();

function testEx2() {
  const data = [
    { name: "철수", kor: 85, eng: 92, math: 88 },
    { name: "영희", kor: 70, eng: 74, math: 95 },
    { name: "지후", kor: 91, eng: 89, math: 85 },
    { name: "지수", kor: 65, eng: 70, math: 72 },
    { name: "윤정", kor: 80, eng: 90, math: 91 },
  ];
  let result = data
    .map((x) => (x.kor + x.eng + x.math) / 3)
    .filter((x) => x > 80)
    .sort()
    .reduce((acc, val) => acc + val);
  console.log(result);
}
testEx2();

console.log("============================");
function testEx2Another() {
  const data = [
    { name: "철수", kor: 85, eng: 92, math: 88 },
    { name: "영희", kor: 70, eng: 74, math: 95 },
    { name: "지후", kor: 91, eng: 89, math: 85 },
    { name: "지수", kor: 65, eng: 70, math: 72 },
    { name: "윤정", kor: 80, eng: 90, math: 91 },
  ];
  let result = data
    .map((x) => ({ ...x, total: x.kor + x.eng + x.math }))
    .filter((x) => x.total >= 240)
    .sort((a, b) => b.total - a.total)
    .reduce((acc, val, idx, arr) => acc + val.total / arr.length, 0);
  console.log(result);
}
testEx2Another();
