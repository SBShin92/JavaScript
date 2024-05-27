// ============== for each ================
function testForEach() {
  let source = ["Banana", "Orange", "Apple", "Mango"];
  source.forEach((item, idx, arr) => {
    console.log(item, idx, arr);
  });
}

testForEach();

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

  result = data.every(x => x.age > 30);
  console.log("every:", result);
}

testSomeEvery();
