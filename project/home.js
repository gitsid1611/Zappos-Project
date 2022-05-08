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
