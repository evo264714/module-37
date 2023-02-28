//* JavaScipt is a Dynamic typed Language
//* Prmitive type
const a = 5;
const b = 'A name';
const d = true;


//* Non primitive type
const ages = [45, 65, 48];
const student = {id: 23, class: 7}
// console.log(typeof a, typeof b, typeof ages, typeof student, typeof d);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'web developer'};
let q = p;
q.job = 'front end dev';
console.log(p, q);