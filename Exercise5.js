const values = [1, 2, 3, 4];

const sum = values.reduce((acc, curr) => acc + curr, 0);
const product = values.reduce((acc, curr) => acc * curr, 1);

console.log(`Sum: ${sum}, Product: ${product}`); 