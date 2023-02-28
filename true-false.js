/*
* Truthy:
* 1. true
* 2. Any number (+ve, -ve) will be truthy other than 0
* 3. Any string other than empty string is truthy
* 4. '0', 'false' is truthy
* 5. {}, [] is truthy

* Falsy:
* 1. false
* 2. 0
* 3. '' (empty string)
* 4. undefined
* 5. null
*/

let x = {};
console.log(x);
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('Value of x is falsy');
}

//* Optional
//* check falsy values
const y = '';
if(!y){
    console.log('value is falsy');

}

//* check truthy
const z = '';
if(!!x){
    console.log('value is truthy');
}