let sym=Symbol ('test');
let obj={
    [sym]:"value"
};
console.log(obj[sym]);