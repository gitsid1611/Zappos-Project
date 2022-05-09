var count=0;
document.querySelector("#llogo").innerText=count;
document.querySelector("#lvalue").addEventListener("click",pro);

function pro()
{
    count++;
    document.querySelector("#llogo").innerText=count;
    document.querySelector("#llogo").style.color="red";
    console.log(count)
}















document.querySelector("#sign").addEventListener("click", display);

document.querySelector("#sign").style.cursor="pointer";

function display(){
    document.querySelector("#cotiner").style.display="block";

    if(namedata[0].pass==signindata[0].pass && namedata[0].email==signindata[0].email)

        {

            document.querySelector("#cotiner").style.display="none";

            document.querySelector("#sign").addEventListener("click", logout);

            window.location.reload(index.html)
        }


}


function logout(){

    document.querySelector("#logoutcont").style.display="block";

}
       // for signout
document.querySelector("#logout").addEventListener("click", deletedata);

function deletedata(){
 
    var arr=[];

    localStorage.setItem("userdata",JSON.stringify(arr));

    var array=[];

    localStorage.setItem("signdata",JSON.stringify(array));

    window.location.reload()




}



// sids code  main box close symbol X
document.querySelector("#clickblock").addEventListener("click", displayclose);

function displayclose(){
    document.querySelector("#cotiner").style.display="none";
}


//  to display name/my account after signin

var namedata=JSON.parse(localStorage.getItem("userdata"))

var signindata=JSON.parse(localStorage.getItem("signdata"))

if(namedata[0].pass==signindata[0].pass)
{
    document.querySelector("#sign").innerText="My Account";

    window.location.reload(home.html)

    

}


// sids end