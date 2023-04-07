// 1. while confirm

let question;
while (!question) {
  question = confirm("Are you stupid?");
}

// 2.array fill

let emptyArray = [];
let someNumber;
while ((someNumber = prompt("Введите число"))) {
  if (someNumber === null) break;
  emptyArray.push(someNumber);
}
alert(emptyArray);

// 3. array fill nopush

let someArray = [];
let question;
let k = 0;
while ((question = prompt("vvedite"))) {
  if (question === null) break;
  someArray[k] = question;
  k++;
}
console.log(someArray);

// 4.infinite probability

let i = 0;

while ((a = Math.random())) {
  if (a > 0.9) break;
  i++;
}
alert(i);

// 5.empty loop

let askQuestion;
while (true) {
  askQuestion = prompt("Не стесняйся, пиши все что думаешь");
  if (askQuestion === null) {
    continue;
  }
  break;
}

// 6.progression sum

let arr = [];
let d;
let n = +prompt("введите число");
for (d = 1; d <= n; d = d + 3) {
  arr.push(d);
}
console.log(arr);

// 7.chess one line

const rowL = +prompt("Введите длину ряда");
let str = "";
for (let i = 1; i <= rowL; i++) {
  str += "#";
}
console.log(str);

// 8.Сформувати рядок за допомогою вкладених циклів.

let i;
let k;
let str = "";
for (let i = 1; i <= 10; i++) {
  str += "\n";
  for (let k = 0; k <= 9; k++) {
    str += k;
  }
}
console.log(str);

// 9.chess

let x = +prompt("введите количество символов по горизонтали");
let y = +prompt("введите количество символов по вертикали");
let str = "";
for (let i = 1; i <= x; i++) {
  str += "\n";
  for (let k = 1; k <= y; k++) {
    (k + i) % 2 === 0 ? (str += ".") : (str += "#");
  }
}
console.log(str);

// 10.cubes


let askLentgh =  +prompt ('введите желаемую длину массива');

let getArr=[];
for (i=0;i<=askLentgh;i++){
  getArr.push(i**3)
};
console.log(getArr)

// 11.multiply table

let x = +prompt("Введите число (множимое)");
let y = +prompt("Введите число (множитель)");
let arr = [];

for (let i = 1; i < x; i++) {
  arr[i-1] = [];
  for (let k = 1; k <= y; k++) {
    arr[i-1][k-1]=i * k;
  }
}
console.log(arr);

// 12.read array of objects

function readArrayOfObjects() {
  const arr = [];

  while (true) {
    const incomingObject = {};
    let key = prompt("введіть ключ");

    while (key !== null) {
      let value = prompt("введите значение ключа");
      incomingObject[key] = value;
      key = prompt("введите ключ");
    }

    arr.push(incomingObject);

    if (!confirm("Вы хотите перейти к введению следующего обьекта?")) {
      break;
    }
  }
  console.log(arr);

  return arr;
}
readArrayOfObjects()
