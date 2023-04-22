
let btn=document.getElementById("btn");
let container=document.getElementById("container");

btn.addEventListener("click", ()=>{
    createnotification();
});

function createnotification(){
    const notify=document.createElement("div");
    notify.classList.add("toast");
    container.appendChild(notify);
    notify.innerText="This is  Beautiful!"
    
    setTimeout(()=>{
        notify.remove();
    },3000)
}

