let url = "https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");
let img=document.querySelector("img");
let imgBox=document.querySelector(".box");

let btnNames=["new dog","Get buetiful dog","Get more dogs","Get dogs","I love this dog","Ohh this is my dog"];

btn.addEventListener("click",()=>{
    getData();
})

async function getData(){
    try {
     let response=await axios.get(url);
     let imgLink=await response.data.message;
     imgBox.innerHTML=`<img src="${imgLink}">`
    } catch (error) {
     console.log("netowork error please check the internet connection");
    }
 }




