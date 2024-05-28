function timerTest(name) {
    console.log("hello");
    setTimeout(() => {
        console.log(`${name}!`);
    }, 3000);
}
timerTest("sashin");
timerTest("gooppy");

function intervalTest() {
    let count = 10;
    console.log("countdown start...");
    let timer = setInterval(() => {
        console.log(count--);
        if (count < 0)
            clearInterval(timer);
    }, 1000)
}
intervalTest();