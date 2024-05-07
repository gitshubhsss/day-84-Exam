//we wants to make a funtion that calculates the area ,curcuferrence,radius

//so first of all

const radius = [5, 8, 7, 3]; //this are the radius that we have

const area = function (radius) {
  return Math.PI * radius * radius;
}; //the only responsiblity of this funtion is to take the radius and retuns the area fo circle

const curcuference=function(radius){
    return 2*Math.PI*radius*radius;
}

const diameter=function(radius){
    return 2*radius;
}

const calculate = function (radius, logic) {
  let output = [];
  for (const value of radius) {
    output.push(logic(value));
  }
  return output;
};
console.log(radius);
console.log(calculate(radius,area));
console.log(calculate(radius,curcuference));
console.log(calculate(radius,diameter));
