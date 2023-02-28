function greeting(greetingHandler, name){
    greetingHandler(name);
}
// const name = 'A Name';
// const numbers = [45, 54, 78];
// const laptop = {price: 45000, brand: 'Lenovo', memory: '8GB'};

function greetingHandler(name){
    console.log('good morning', name);
}
greeting(greetingHandler, 'Tom Hanks');