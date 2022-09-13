// class KeyUpObserver {
//     constructor(){
//         this.observers = []
//     }

//     subscribe(fn){
//         this.observers.push(fn);
//     }

//     unsubscribe(fn) {
//         this.observers = this.observers.filter((cb) => cb !== fn)
//     }

//     broadcast(data) {
//         this.observers.forEach((cb) => cb(data))
//     }

// }

// const getWordCount = (text) => (text ? text.trim().split(/\s+/).length : 0)
// const wordCountEl = document.createElement("p")
// wordCountEl.innerHTML = 'Word Count: <strong id="blogWordCount">0</strong>'
// document.body.appendChild(wordCountEl);

// function fib(n){
//     if (n <= 2) return 1;

//     //recursive
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(10));

// function memofib(n, memo){
//     memo= memo ||{}
//     if (memo[n]) return memo[n];
//     if (n<=2) return 1;
//     const res = memofib(n-1, memo) + memofib(n-2, memo);
//     memo[n] = res
//     return res;
// }

// console.log(memofib(100))

//rest

console.groupCollapsed('Rest Operator')

function sumOf(...args) {
    console.log('args:', args);

    let sum = 0;

    args.forEach((arg) => (sum += arg));

    return sum;
}

const testCalculation = sumOf(1, 3, 5, 8);

console.log("testCalculation:", testCalculation);
console.groupEnd();

const arr = [1, 2 ,3 ,4 ,5]
// const [first, second, third, ...rest] = arr;
// console.log({first, second, third, rest})

const obj={first: 1, second: 2, third: 3}
const {first, second, ...rest} = obj;

console.log({first, second, rest})

