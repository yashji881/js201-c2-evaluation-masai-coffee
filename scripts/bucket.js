// On clicking remove button the item should be removed from DOM as well as localstorage.

var dataarr=JSON.parse(localStorage.getItem("coffee"));

dataarr.map(function(el,index){

let box=document.createElement("div");
box.setAttribute("id","box");

var image=document.createElement('img');
image.src=el.image;
image.setAttribute("id","image");

var title=document.createElement("h2");
title.innerText=el.title;

var price=document.createElement("h3");
price.innerText=el.price;

var btn=document.createElement("button");
btn.innerText="Remove";
btn.setAttribute("id","remove_coffee");
btn.addEventListener("click",function(){
    removedata(el,index);
})

box.append(image,title,price,btn);

document.getElementById("bucket").append(box);
})

function removedata(el,index){
    dataarr.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(dataarr));
    window.location.reload();
}


var total=dataarr.reduce(function(sum,el,index,arr){
    return sum+el.price;
},0);

document.getElementById("total-amount").innerHTML=total;