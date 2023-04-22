let images=document.getElementById("images");
let img=document.querySelectorAll('#images img')
let index=0;

function run(){
  index++;
  if(index>img.length-1){
    index=0;
  }
  images.style.transform= `translateX(${-index*500}px)`;
 
}
setInterval(run , 2000);