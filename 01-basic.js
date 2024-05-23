//this
/*
  is
  comment.
*/

/*
  console: 단계별 로그 출력 객체
    단계: FATAL - ERROR (error) - WARN (warn) - NORMAL (log, info), DEBUG(debug)
*/

// =============== console ==================
console.log("=============== console ==================");

//std out
console.info("정보");
console.debug("디버그");
console.log("일반");

// std err
console.warn("경고");
console.error("에러");

// =============== etc. ==================
console.log("=============== etc. ==================");

// 출력은 ,로 구분하여 나열할 수 있다.
console.log("kkk", 2024, true);
console.log(process.version, process.platform);
console.log(Math.PI);
console.log(Math.max(1, 3, 2, 4, 6));

// =============== var, let, const ==================
console.log("=============== var, let, const ==================");

var testVar;
testVar = "var";
let testLet;
testLet = "let";
// const testConst;
// testConst = "const";
const testConst = "const";
console.log(testVar, testLet, testConst);

testVar = "var changed";
testLet = "let changed";
// testConst = "const changed";
console.log(testVar + ",", testLet + ",", testConst);


// =============== Dynamic type Language ==================
console.log("=============== Dynamic type Language ==================");

let v = "this is str";
console.log(v, "->", typeof v);
v = 2024;
console.log(v, "->", typeof v);
v = 10 > 8;
console.log("10 > 8 ?", v, "->", typeof v);

