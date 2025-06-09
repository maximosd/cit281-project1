/*
    CIT 281 Project 1
    Name: Maximo Stowers-DeWolfe
*/

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
function randomNumber(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
}
let length = randomNumber(5,25);
let randomString = "";
for (let i = 0; i < length; i++) {
    randomString += letters[Math.floor(Math.random() * letters.length)];
}
console.log(`${length} lowercase letters: ${RandomString}`);
