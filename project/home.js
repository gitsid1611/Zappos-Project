document.querySelector("#sign").addEventListener("click", display);

function display(){
    document.querySelector("#cotiner").style.display="block";
}

// sids code
document.querySelector("#clickblock").addEventListener("click", displayclose);

function displayclose(){
    document.querySelector("#cotiner").style.display="none";
}

var namedata=JSON.parse(localStorage.getItem("userdata"))

var signindata=JSON.parse(localStorage.getItem("signdata"))

if(namedata[0].pass==signindata[0].pass)
{
    document.querySelector("#sign").innerText=namedata[0].name
}

// sids end