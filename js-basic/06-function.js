function sum(a, b) {
    return a + b;    
}


console.log(sum(1, 2));

const sumFunc = function(a, b) {
    return a + b;
}

console.log(sumFunc(2, 3), typeof sumFunc, typeof sumFunc());

console.log(sumFunc(), sumFunc(2), sumFunc(2, 3), sumFunc(2, 3, 7));


console.log("=======================");
function getNumTotal() {
    console.log("arg:", arguments);
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }
    return res;
}
console.log(getNumTotal(1, 2, 3, 4, 5));
console.log(getNumTotal(1, 2, "3", 4, 5));

function getRealNumTotal() {
    console.log("arg:", arguments);
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "number")
            res += arguments[i];
    }
    return res;
}
console.log(getRealNumTotal(1, 2, "3", 4, 5));

const f1_arrow = () => "hello";
console.log(f1_arrow());
const f2_arrow = name => "hello " + name;
console.log(f2_arrow('world'));

console.log("=======================");

function sandBox(val1, val2, func) {
    if (typeof func == "function")
            func(val1, val2);
}
sandBox(3, 4, function(v1, v2) {
    console.log(v1 + v2);
});




// cf -------------------------------------------
// function getNum() {
    //     console.log("arg:", arguments);
    //     let res = 0;
    //     for (node in arguments) {
//         res += node;
//     }
//     return res;
// }
// console.log(getNum(1, 2, 3, 4, 5));