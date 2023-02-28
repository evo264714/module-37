/*
* 8 ways to get undefined
* 1. Variable that is not initialized will give undefinded
* 2. Functions that has no return
* 3. Parameters that are not passed will be undefined
* 4. If return has nothing on the right side, will return undefined
* 5. Property that does not exist on an object, will give you undefined
* 6. Accessing an array elements outside of the index range, will give you undefined
* 7. Deleting an element inside an array
* 8. Set a value directly to undefined
*/

//! 1
let first;
// console.log(first);


//! 2
function second(a, b){
    const total = a + b;

}
const result = second();
// console.log(result);


//! 3
function third(a, b, c, d){
    const total = a + b + c + d;
    // console.log(a, b, c, d);
}
third(2, 5);
// console.log(result);

//! 4
function noNegative(a, b){
    if(a < 0 || b < 0){
        return;
    }
    return a + b;
}
const total = noNegative(2, -5);
// console.log(total);

//! 5
const fifth = {id: 2, name: 'Five', age: 40}
// console.log(fifth.age, fifth.salary);

//! 6
const sixth = [4, 89, 87, 56, 54];
// console.log(sixth[1], sixth[5], sixth[200]);

//! 7
const seventh = [4, 89, 87, 56, 54];
//* You should not do it. Instead use splice
delete seventh[1];
// console.log(seventh[1], seventh[5], seventh[200]);

//! 8
const eighth = undefined;

const ninth = null;


const data = {results: [], updated: null}
console.log(typeof null);