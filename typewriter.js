const sentence = 'hello there from lighthouse labs ';
let delay = 0;
const increment = 50

for (let i of sentence) {
    setTimeout(() => {
        console.log(i)              
    }, delay);
    delay += increment;
} 