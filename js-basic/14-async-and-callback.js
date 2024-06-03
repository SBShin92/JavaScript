const logicA = () => {
    console.log("begin logicA");
    setTimeout(logicB, 200);
    console.log("end logicA");
}
const logicB = () => {
    console.log("  begin logicB");
    setTimeout(logicC, 200);
    console.log("  end logicB");
}
const logicC = () => {
    console.log("    begin logicC");
    console.log("    end logicC");
}
// setInterval(logicA, 2000);
// logicA();


// =========================================================================
// Promise
const logicPromise = () => {
    const myProm = new Promise((resolve, reject) => {
        console.log("begin Promise Logic");
        setTimeout(() => {
            reject("REJECTED"); // reject!
            resolve("RESOLVE");
        }, 500);
    });
    return myProm;
}

const testLogicPromise = () => {
    console.log("test logic promise");
    logicPromise()
    .then(value => {console.log(`Promise resolve?: ${value}`);})
    .catch(reason => {console.error(`Promise Rejected: ${reason}`);})
    
}
// testLogicPromise();


// =========================================================================
const asyncFunction = async () => {
    try {
        console.log("start");
        const result = await fetchData();
        console.log("good!!: ", result); // resolve
    } catch (reason) {
        console.error("Failed to get data T_T"); // reject
    }
}

const fetchData = async () => {
    return new Promise((resolve, reject) => {
        console.log("loading...");
        setTimeout(() => resolve("get data complete."), 2000); // resolve, reject 바꿔서 실행
    });
}
asyncFunction();