const person = new Object();

console.log(person);
person.name = "sashin";
person.age = 18;
person.showInfo = function() {
    let message = `Name: ${this.name}, Age: ${this.age}`;
    console.log(message);
}
console.log(person);
person.showInfo();

console.log("==============================");
const personJson = {
    name: "SBShin92",
    age: 15,
    showInfo: function() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
console.log(personJson);
personJson.showInfo();

console.log("=============================");
const Member = function(name, position) {
    this.name = name;
    this.position = position;
    // this.introduce = function() {
    //     console.log(`Name: ${this.name} Position: ${this.position}`);
    // }
}
Member.prototype.team = "북산";
Member.prototype.introduce = function() {
    console.log(`Name: ${this.name} Position: ${this.position}`);   
}
const m1 = new Member("백호", "파워포워드");
m1.introduce();