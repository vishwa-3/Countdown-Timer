//up arrow
const up1 = document.querySelector('.up1');
const up2 = document.querySelector('.up2');
const up3 = document.querySelector('.up3');
//down arrow
const down1 = document.querySelector('.down1');
const down2 = document.querySelector('.down2');
const down3 = document.querySelector('.down3');
//buttons
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
//timetext
const hh = document.querySelector('.hh');
const mm = document.querySelector('.mm');
const ss = document.querySelector('.ss');

let timeRunning = false;

up1.addEventListener('click',hourIn)
up2.addEventListener('click',minIn)
up3.addEventListener('click',secIn)

down1.addEventListener('click',hourDe)
down2.addEventListener('click',minDe)
down3.addEventListener('click',secDe)

start.addEventListener('click',()=> {
    if(!timeRunning){
        x = setInterval(startTimer, 1000);
        timeRunning=true;
    }
    
})
stop.addEventListener('click',stopTimer)
reset.addEventListener('click',resetTimer)

doubleDigit(ss);
doubleDigit(mm);
doubleDigit(hh);
//hiwdadih

function doubleDigit(digit){
    digit.textContent = (digit.textContent.length == 1)?'0'+digit.textContent:digit.textContent;
}
function hourIn(){
    if(!timeRunning){
        if(hh.textContent<24){
            hh.textContent++;
            doubleDigit(hh);
        } 
        else hh.textContent='0'+0;
    }
}
function minIn(){  
    if(!timeRunning)
    {if(mm.textContent<59){ 
        mm.textContent++;
        doubleDigit(mm);
    }
    else mm.textContent='0'+0;}
}
function secIn(){
    if(!timeRunning)
    {if(ss.textContent<59) {
        ss.textContent++;
        doubleDigit(ss);
    }
    else ss.textContent='0'+0;}
}
function hourDe() {
    if(!timeRunning)
    {if(hh.textContent>0){
        hh.textContent--;
        doubleDigit(hh);
    } 
    else hh.textContent=24;}
}
function minDe() {
    if(!timeRunning)
    {if(mm.textContent>0){
        mm.textContent--;
        doubleDigit(mm);
    } 
    else mm.textContent=59;}
}
function secDe() {
    if(!timeRunning)
    {if(ss.textContent>0){
        ss.textContent--;
        doubleDigit(ss);
    } 
    else ss.textContent=59;}
}
function startTimer(){
    if(ss.textContent == 0 && mm.textContent == 0 && hh.textContent == 0){
        stopTimer();
        return;
    }
    ss.textContent--;
    if(ss.textContent<0){
        if(mm.textContent>0){
            mm.textContent--;
            ss.textContent=59;
        }
        else{
            if(hh.textContent>0){
                hh.textContent--;
                mm.textContent=59;
                ss.textContent=59;
            }
        }
    }
    doubleDigit(ss);
    doubleDigit(mm);
    doubleDigit(hh);
}
function stopTimer(){
    timeRunning = false;
    clearInterval(x);
}
function resetTimer(){
    ss.textContent='0'+0;
    mm.textContent='0'+0;
    hh.textContent='0'+0;
}
