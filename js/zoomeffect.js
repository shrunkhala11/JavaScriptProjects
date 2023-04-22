let container=document.getElementById("container");
let img=document.querySelector("img");

container.addEventListener("mousemove", (a)=>{
 let x =a.clientX - a.target.offsetLeft;
 let y =a.clientY - a.target.offsetTop;
  console.log(x,y);

  img.style.transformOrigin=`${x}px ${y}px`;
  img.style.transform="scale(2)";
});

container.addEventListener("mouseleave", ()=>{
    img.style.transformOrigin="center center";
    img.style.transform="scale(1)";
});