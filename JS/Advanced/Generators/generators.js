function* numberGen(){
    let i = 0;

    while(i<10) yield i++;
}

const gen = numberGen()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)