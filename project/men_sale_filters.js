
var lucky=document.querySelector("#luckyli")
lucky.addEventListener("click",luckyfun)

function luckyfun(){
  items.innerHTML=""
  var lucky=boot.filter(function (elem){
    return elem.name== "Lucky Brand"
    
  })
  console.log(lucky)
  localStorage.setItem("womenBoot",JSON.stringify(lucky))
  var luckyArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(luckyArr)
}

var TheNorthFace=document.querySelector("#TheNorthFaceli")
TheNorthFace.addEventListener("click",TheNorthFacefun)

function TheNorthFacefun(){
  items.innerHTML=""
  var TheNorthFace=boot.filter(function (elem){
    return elem.name== "The North Face"
    
  })
  console.log(TheNorthFace)
  localStorage.setItem("womenBoot",JSON.stringify(TheNorthFace))
  var TheNorthFaceArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(TheNorthFaceArr)
}



var NewBalance=document.querySelector("#NewBalanceli")
NewBalance.addEventListener("click",NewBalancefun)

function NewBalancefun(){
  items.innerHTML=""
  var NewBalance=boot.filter(function (elem){
    return elem.name== "New Balance"
    
  })
  console.log(NewBalance)
  localStorage.setItem("womenBoot",JSON.stringify(NewBalance))
  var NewBalanceArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(NewBalanceArr)
}

var UGG=document.querySelector("#UGGli")
UGG.addEventListener("click",UGGfun)

function UGGfun(){
  items.innerHTML=""
  var UGG=boot.filter(function (elem){
    return elem.name== "UGG"
    
  })
  console.log(UGG)
  localStorage.setItem("womenBoot",JSON.stringify(UGG))
  var UGGArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(UGGArr)
}

var NewBalance=document.querySelector("#NewBalanceli")
NewBalance.addEventListener("click",NewBalancefun)

function NewBalancefun(){
  items.innerHTML=""
  var NewBalance=boot.filter(function (elem){
    return elem.name== "New Balance"
    
  })
  console.log(NewBalance)
  localStorage.setItem("womenBoot",JSON.stringify(NewBalance))
  var NewBalanceArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(NewBalanceArr)
}

var black=document.querySelector("#blackli")
black.addEventListener("click",blackfun)

function blackfun(){
  items.innerHTML=""
  var black=boot.filter(function (elem){
    return elem.color== "Black"
    
  })
  console.log(black)
  localStorage.setItem("womenBoot",JSON.stringify(black))
  var blackArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(blackArr)
}
var black=document.querySelector("#brownli")
black.addEventListener("click",brownfun)

function brownfun(){
  items.innerHTML=""
  var brown=boot.filter(function (elem){
    return elem.color== "brown"
    
  })
  console.log(brown)
  localStorage.setItem("womenBoot",JSON.stringify(brown))
  var brownArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(brownArr)
}
var blue=document.querySelector("#blueli")
blue.addEventListener("click",bluefun)

function bluefun(){
  items.innerHTML=""
  var blue=boot.filter(function (elem){
    return elem.color== "blue"
    
  })
  console.log(blue)
  localStorage.setItem("womenBoot",JSON.stringify(blue))
  var blueArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(blueArr)
}
var white=document.querySelector("#Whiteli")
white.addEventListener("click",whitefun)

function whitefun(){
  items.innerHTML=""
  var white=boot.filter(function (elem){
    return elem.color== "white"
    
  })
  console.log(white)
  localStorage.setItem("womenBoot",JSON.stringify(white))
  var whiteArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(whiteArr)
}

// Price Filtering--->
var under50=document.querySelector("#under50")
under50.addEventListener("click",under50fun)
under50.id="under50id"
function under50fun(){
  items.innerHTML=""
  var under50=boot.filter(function (elem){
    return elem.price<50
    
  })
  console.log(under50)
  localStorage.setItem("womenBoot",JSON.stringify(under50))
  var under50Arr=JSON.parse(localStorage.getItem("womenBoot"))
  display(under50Arr)
}   
var under100=document.querySelector("#under100")
under100.addEventListener("click",under100fun)
under100.id="under100id"
function under100fun(){
  items.innerHTML=""
  var under100=boot.filter(function (elem){
    return elem.price<100
    
  })
  console.log(under100)
  localStorage.setItem("womenBoot",JSON.stringify(under100))
  var under100Arr=JSON.parse(localStorage.getItem("womenBoot"))
  display(under100Arr)
}   
var under200=document.querySelector("#under200")
under200.addEventListener("click",under200fun)
under200.id="under200id"
function under200fun(){
  items.innerHTML=""
  var under200=boot.filter(function (elem){
    return elem.price<200
    
  })
  console.log(under200)
  localStorage.setItem("womenBoot",JSON.stringify(under200))
  var under200Arr=JSON.parse(localStorage.getItem("womenBoot"))
  display(under200Arr)
}   
var over200=document.querySelector("#over200")
over200.addEventListener("click",over200fun)
over200.id="over200id"
function over200fun(){
  items.innerHTML=""
  var over200=boot.filter(function (elem){
    return elem.price>200
    
  })
  console.log(over200)
  localStorage.setItem("womenBoot",JSON.stringify(over200))
  var over200Arr=JSON.parse(localStorage.getItem("womenBoot"))
  display(over200Arr)
} 
var fd=document.querySelector("#fdback")
fd.addEventListener("click",fdfun)
fd.style.color="#07787e"
function fdfun(){
  alert("Let us know your feedback!")
}



