let stars = '';
for (let i = 0; i <5; i++){
    stars = stars + '*';
    console.log(stars);
}

function starLoop(n) {
    for (let i=1; i<=n; i++){
        console.log('*'.repeat(i))
    }
}

starLoop(5);

let star = '*'
let line = '_'
for (let i=1; i < 4; i++){
    console.log(line.repeat(4-i)+(star.repeat(2*i-1)+line.repeat(4-i)))
}
