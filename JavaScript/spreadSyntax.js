function add(a,b,c,d,e){
    return a+b+c+d+e;
};

const nums=[1,2,2,2,2];

let result=add(...nums);
console.log(result);