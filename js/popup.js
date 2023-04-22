let open=document.getElementById("open");
let close=document.getElementById("close");
let container=document.getElementById("container");

 open.addEventListener('click', ()=>{
    container.classList.add("active")
 })
 close.addEventListener('click', ()=>{
    container.classList.remove("active")
 })