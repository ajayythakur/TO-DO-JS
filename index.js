let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");

btn1.addEventListener("click",function(){
    let div=document.createElement("div")
    div.setAttribute("id","card")

    let parent=document.getElementById("parent");
    parent.appendChild(div);
})