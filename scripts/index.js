// Add the coffee to local storage with key "coffee"

let dataarr=JSON.parse(localStorage.getItem("coffee"))||[];
const url="https://masai-mock-api.herokuapp.com/coffee/menu";

fetch(url).then(function(res){
    return res.json();
}).then(function(res){
    append(res.menu.data);
    console.log(res.menu.data);
}).catch(function(err){
    console.log("err",err);
})
function append(data){

    data.forEach(function(el){

    


let box=document.createElement("div");
box.setAttribute("id","box");

let title=document.createElement("h2");
title.innerText=el.title;

let image=document.createElement("img");
image.src=el.image;
image.setAttribute("id","image");


let price=document.createElement("h4");
price.innerText=el.price;

let btn=document.createElement("button");
btn.innerText="Add To bucket";
btn.addEventListener("click",function(){
    addtocart(el);
});
box.append(image,title,price,btn);
document.getElementById("menu").append(box);
});
}

function addtocart(el){
    dataarr.push(el);
    localStorage.setItem("coffee",JSON.stringify(dataarr));
    // window.location.reload();
}
let length=dataarr.length;

document.getElementById("coffee-count").innerText=length;