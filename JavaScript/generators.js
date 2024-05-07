function *numbersGen(){
    let i=1;
    yield 2;
    yield 3;
    yield 4;
}

const gen=numbersGen();

console.log(gen.next());

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//output--> { value: 2, done: false }