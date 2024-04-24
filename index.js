let a = 20;
let b = 30;

try {
    console.log('a + c =', a + c)
} catch(err) {
    console.log('Error here :', err)
}


// Basic asynchronous programing

console.log('one')
console.log('two')

setTimeout(() => {
    console.log('hello')
}, 3000)

console.log('three')
console.log('four')