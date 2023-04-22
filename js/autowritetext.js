let text="motivational thoughts which are precious and motivate us"
let index=0;

function writetext(){
    index++;
    document.body.innerText=text.slice(0,index);
    if(index > text.lenght){
        index=0;
    }

}
setInterval(writetext, 100);