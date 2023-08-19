"use strict";
let c = true;

let a = Math.round(Math.random() * 100);
console.log(a);

alert("Відгадайте число від 0 до 100");
while (true) {
  let b = +prompt("Введіть число від 0 до 100");
  if (isNaN(b)) {
    alert("Помилка");
    break;
  } else if (a < b) {
    alert("Введене Вами число більше за те, що я загадав");
  } else if (a > b) {
    alert("Ваше число меньше за те,що я загадав");
  } else {
    alert("Ви вгадали!!");
    break;
  }
}
