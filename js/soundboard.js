let sound=["chand","dhinak" ,"dil","maa"];

sound.forEach((sound)=>{
    let btn=document.createElement("button");
    btn.classList.add("btn");
    btn.innerText= sound;   //it give song name to each button

    btn.addEventListener("click",()=>{
        document.getElementById(sound).Play();
    });

    document.body.appendChild(btn);

});
function stop(){
    sound.forEach(sound=>{
       let song= document.getElementById(sound).Pause();
        song.currentTime=0;
    });
}