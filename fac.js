'use strict';
const number = process.argv[2]||1;
let fac = 1
for(let i = 1; i <= number ; i++){
  fac *= i;
}

console.log(fac)
