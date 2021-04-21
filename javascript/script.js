const a = 10;
const b = 10;
const mycontainer = document.querySelector('#mycontainer');


//Fat arrow
// function addandDouble(x, y) {
//     const sum = x + y;
//     let finalResult;
//     if (sum < 10) {
//         finalResult = sum * 2;
//     }
//     else {
//         finalResult = sum;
//     }
//     return finalResult;
// }

const addandDouble = (x, y) => {
    const sum = x + y;
    let finalResult;
    if (sum < 10) {
        finalResult = sum * 2;
    }
    else {
        finalResult = sum;
    }
    return finalResult;
}

const total = addandDouble(a, b);
const h1El = document.createElement('p');
// h1El.innerText = 'Total is ' + total;

h1El.innerText = `Total is ${total}`;
mycontainer.appendChild(h1El);
// console.log(total);


//Array

const arr = [10, 20, 30];

//Higher Order Function
// const result = arr.map(function (item) {
//     return item * 2;
// });

const result = arr.map(item => item * 2);

console.log(result);