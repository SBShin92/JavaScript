console.log("================= 배열의 결합 ===================");
// 배열의 결합
const arr1 = ['홍길동','장길산'];
const arr2 = ['임꺽정','전우치'];
const combined = [...arr1, ...arr2];
console.log("ES6 combine:", combined);

// 배열 안에 있는 요소를 변수에 지정
let [ first, second, third = "this is empty", ...others ] = combined;
console.log(first, second, third, others); // 홍길동 장길산 임꺽정 [ '전우치' ]


console.log("================= 객체의 결합 ===================");
let obj1 = { one: 1, two: 2, other: 0 };
let obj2 = { three: 3, four: 4, other: -1};
objCombined = Object.assign({}, obj1, obj2);
console.log(objCombined);


objCombined = {
    ...obj1, // obj1의 모든 속성을 전개
    ...obj2, // obj2의 모든 속성을 전개
}
console.log(objCombined); // { one: 1, two: 2, other: -1, three: 3, four: 4 }

delete objCombined.other;
console.log(objCombined); // { one: 1, two: 2, other: -1, three: 3, four: 4 }

let {one, three, five, ...rest} = objCombined;
console.log(one, three, five, rest);