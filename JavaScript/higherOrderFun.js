const radius=[3,1,2,4];

const calcArea=function area(radius){
    let output=[];
    for (const value of radius) {
        let result= Math.PI*(value*value); 
        output.push(result)
    }
    return output;
    
}
console.log(calcArea(radius));

const calcCurcumference=function curcuference(radius){
    let output=[];
    for(const value of radius){
        let result=2*Math.PI*value;
        output.push(result)
    }
    return output;
}


console.log(calcCurcumference(radius));