const person = new Object();

console.log(person);
person.name = "sashin";
person.age = 18;
person.showInfo = function () {
  let message = `Name: ${this.name}, Age: ${this.age}`;
  console.log(message);
};
console.log(person);
person.showInfo();

console.log("==============================");
const personJson = {
  name: "SBShin92",
  age: 15,
  showInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  },
};
console.log(personJson);
personJson.showInfo();

console.log("=============================");
const Member = function (name, position) {
  this.name = name;
  this.position = position;
};
Member.prototype.team = "북산";
Member.prototype.introduce = function () {
  console.log(
    `Name: ${this.name}, Position: ${this.position}, team: ${this.team}`
  );
};
const m1 = new Member("백호", "파워포워드");
const m2 = new Member("태웅", "스몰포워드");
console.log(m1.constructor);
console.log(m2.constructor);
m1.introduce();
m2.introduce();
console.log(Member.prototype);
console.log(m1);
console.log(m2);

String.prototype.sayHi = function() {
    return `안녕하세요, ${this}`;
}
console.log("톰".sayHi());