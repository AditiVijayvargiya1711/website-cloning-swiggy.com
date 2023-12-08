
function fun(){
    let h=document.getElementById("first12")
    if( h.innerText=="Cooking gone wrong?"){
        h.innerText="Hungry?";
    }
    else if(h.innerText=="Hungry?"){
        h.innerText="Late night at office?";
    }
    else if(h.innerText=="Late night at office?"){
        h.innerText="Game night?";
    }
    else if(h.innerText=="Game night?"){
        h.innerText="Unexpected guests?";
    }
    else if(h.innerText=="Unexpected Guests?"){
        h.innerText="Movie marathon";
    }
    else{
        h.innerText="Cooking gone wrong?";
    }
}
setInterval(fun,2000);
