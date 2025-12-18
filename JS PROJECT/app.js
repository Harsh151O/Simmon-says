let usre_input =[];
let game_seq =[];

let level=0;
let started=false ;

document.addEventListener("keypress" , function (){
    if(started==false)
        {
            started=true;
        console.log("game started");
    }
    levelup();
})

function btnflash(btnn){
    btnn.classList.add("flash");

    setTimeout(function () {
        btnn.classList.remove("flash");
    }, 300); 
}

function userflash(btn) {
    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300); 
}


let h3 = document.querySelector("h3");


let btn=["green","red","purple","yellow"]


function levelup(){
    usre_input=[];
    level++;
    h3.innerText=`Level-${level}`;

    let randind = Math.floor(Math.random()*3);
    let randcol = btn[randind];
   let randbtn = document.querySelector(`.${randcol}`);
    game_seq.push(randcol);
    console.log(game_seq);
    console.log(randind);
    console.log(randcol);
    console.log(randbtn);
    btnflash(randbtn);
}



function check(inx)
{
    if(usre_input[inx]===game_seq[inx])
    {
        if(usre_input.length === game_seq.length)
        {
            setTimeout(levelup , 1000);
        }
    }
    else
    {
        document.querySelector ("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector ("body").style.backgroundColor = "white"
        } , 300)
        h3.innerHTML=`game over  !<b>your score :${level} </b> <br> press any key to start.`;
        reset();
    }
}


let allbtn = document.querySelectorAll(".box");
for(btns of allbtn)
{
    btns.addEventListener("click" , function ()
{
    let btn = this;
    userflash(btn);
    let usercolor=this.getAttribute("id");
    usre_input.push(usercolor);
    check(usre_input.length-1);
}
);
}

function reset()
{
    level=0;
    started=false ;
    usre_input =[];
    game_seq =[];

}