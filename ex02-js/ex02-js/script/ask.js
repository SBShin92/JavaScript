alert("Welcome!");
let c = confirm("can u inform ur name?");
let name;
if (c == true) {
  name = prompt("input name");
}
document.write(`Hello, ${name}!`);
