// 문서 내 사용할 String
const s1 = "Modern JavaScript";

// 문자열 출력 방법
console.log("String :", s1, ", length:", s1.length);
console.log("String : " + s1 + ", length: " + s1.length);
console.log(`String : ${s1}, length: ${s1.length}`);

// idx는 0부터 시작한다.
console.log(s1.charAt(2));
console.log(s1[2]);

// ================== substr, substring, slice ================
console.log("================== substr, substring, slice ================");
// console.log(s1.substr(2, 5)); deprecated
console.log(s1.substring(2, 5));
console.log(s1.slice(2, 5));

console.log("====== substring, slice 차이 비교 ============");
console.log("substring:", "hello world".substring(-3, 2));
console.log("slice:", "hello world".slice(-3, 2));


// ================== Search String ================
console.log("================== Search String ================");

let idx = s1.indexOf("a");
console.log("1st index of 'a':", idx);
idx = s1.indexOf("a", ++idx);
console.log("2nd index of 'a':", idx);
idx = s1.indexOf("a", ++idx);
console.log("3rd index of 'a':", idx);
console.log("lastIndex:", s1.lastIndexOf("a"));

// ================== Replace String ================
console.log("================== Replace String ================");

const s1_changed = s1.replace("a", "b");
console.log(s1_changed);
const s1_changedAll = s1.replace(/a/g, "b"); // g: global, i: anycase, m: multiline
console.log(s1_changedAll);


// ================== etc. ================
console.log("================== etc. ================");

console.log("      hello world           ".trim());
// escape sequence
console.log("hello\nworld!\tmy name\nis \"sashin\"");
console.log(5 != '5');