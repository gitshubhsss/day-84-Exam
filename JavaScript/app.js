let h1=document.querySelector('h1');

function colorChange(color ,delay,colorChanged){
    setTimeout(() => {
        h1.style.color=color;
        colorChanged();
    }, delay);
}

colorChange("red",1000,function colorChanged() {
    colorChange("green",1000,()=>{
        colorChange("orange",1000)
    })
});//this is the call back hell 
//calll back nesting
