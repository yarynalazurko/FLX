let arg1 = process.argv[2];
let arg2 = process.argv[3];

import Math from './modules_default_export_math';

console.log(Math.PI);
console.log(Math.sqrt(+arg1));
console.log(Math.square(+arg2));
