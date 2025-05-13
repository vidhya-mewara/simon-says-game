let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purplr"];

let started=false;
let level=0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started=true;
    }
    
    levelUp();
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `level ${level}`;

    //random button choose
    let randIdx=Math.floor(Math.random()*3);
    let randcolor= btns[randIdx]
    let randbtn=document.querySelector(`.${randcolor}`)
    // console.log(randIdx)
    // console.log(randcolor)
    // console.log(randbtn)

    gameSeq.push(randcolor);
    console.log(gameSeq)


    btnFlash(randbtn);
}

function checkans(idx){
    // console.log("curr level = ",level);
   
    if(userSeq[idx]==gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);

       }
    }
    else{
        h2.innerHTML=`Game Over! Your score is <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"   
        },250)
        reset();
    }
}

function btnpress(){
    // console.log(this);
   let btn=this;
   btnFlash(btn);

   usercolor= btn.getAttribute("id");
   userSeq.push(usercolor);
   
   checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}