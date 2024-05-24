function sum(a, b) {
    return a + b;    
}


console.log(sum(1, 2));

const resul = function(a, b) {
    console.log("a, b:", typeof a, typeof b);
    return a + b;
}

console.log(resul(2, 3), typeof resul, typeof resul());

console.log(resul(), resul(2), resul(2, 3), resul(2, 3, 7));


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
        if (typeof arguments[i] === "num ber")
            res += arguments[i];
    }
    return res;
}
console.log(getRealNumTotal(1, 2, "3", 4, 5));

const f1_arrow = () => "hello";
console.log(f1_arrow());
const f2_arrow = name => "hello " + name;
console.log(f2_arrow('world'));




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