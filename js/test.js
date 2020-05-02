let a = 1;
let b = 1;
let c = b;

const arr = [a, b];

for (let i = 1; i < 20; i++){
    c = a + b;
    a = b;
    b = c;
    arr.push(c)
}

console.log(arr)