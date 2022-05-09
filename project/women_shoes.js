var items=document.querySelector("#items")
var womensBoot = [
  {
    image_url:
      "https://m.media-amazon.com/images/I/71jslCW8YfL._AC_SR255,340_.jpg",
    name: "Timberland PRO ",
    desc:"Sawhorse 6' Composite Safety Toe",
    price:"121.99",
    strikedoffprice:"132.50",
    rating:"4",
    cat:"Boot",
    color:"brown",
  },
  {
   image_url:
      "https://m.media-amazon.com/images/I/71jslCW8YfL._AC_SR255,340_.jpg",
    name: "Dr. Martens Work",
    desc:"Arbor Steel TOe Chelsea Boot",
    price:"119.95",
    strikedoffprice:"130.00",
    rating:"4",
    cat:"Boot",
    color:"brown",
  },
   
  {
      image_url:
      "https://m.media-amazon.com/images/I/71nwtpSjKgL._AC_SR255,340_.jpg",
    name: "Rocky",
    desc:"5' Work Smart Comp Toe",
    price:"105.00",
    strikedoffprice:"115.00",
    rating:"4",
    cat:"Boot",
    color:"brown",
  
  },
  {
        image_url:
      "https://m.media-amazon.com/images/I/517O5ZWaB2L._AC_SR255,340_.jpg",
    name: "Hunter",
    desc:"Original Chelsea",
    price:"70.00",
    strikedoffprice: "140.00",
    rating:"4",
    cat:"Boot",
    color:"blue",
    
  },
   {
        image_url:
      "https://m.media-amazon.com/images/I/41fiskzaMkL._AC_SR255,340_.jpg",
    name: "MIA",
    desc:"Kymi",
    price:"54.99",
    strikedoffprice:"69.99",
    rating:"5",
    cat:"Boot",
    color:"White",
    
  },
   {
        image_url:
      "https://m.media-amazon.com/images/I/71P876CwFyL._AC_SR255,340_.jpg",
    name: "UGG",
    desc:"Classic Short II",
    price: "96.35",
    strikedoffprice: "169.95",
    rating:"5",
    cat:"Boot",
    color:"red",
    
  },
  {
  image_url:
      "https://m.media-amazon.com/images/I/81UZEjFsXTL._AC_SR255,340_.jpg",
    name: "The North Face",
    desc:"Thermoball Eco Parka",
    price:"199.99",
    strikedoffprice:"250.00",
    rating:"5",
    cat:"Clothing",
    color:"Black",
 },
{
  image_url:
      "https://m.media-amazon.com/images/I/91g-QFDQfAL._AC_SR255,340_.jpg",
    name: "The North Face",
    desc:"Canyonalands Full Zip",
    price:"59.99",
    strikedoffprice:"79.00",
    rating:"5",
    cat:"Clothing",
    color:"Blue",
 },
{
  image_url:
      "https://m.media-amazon.com/images/I/71-y4BoKWAL._AC_SR255,340_.jpg",
    name: "The North Face",
    desc:"Thermoball Eco Jacket",
    price:"159.99",
    strikedoffprice:"199.00",
    rating:"5",
    cat:"Clothing",
    color:"White",
 },
{
  image_url:
      "https://m.media-amazon.com/images/I/81iUdTPPrJL._AC_SR255,340_.jpg",
    name: "Lucky Brand",
    desc:"Thermoball Eco Parka",
    price:"199.99",
    strikedoffprice:"250.00",
    rating:"5",
    cat:"Clothing",
    color:"Black",
 },
{
  image_url:
      "https://m.media-amazon.com/images/I/81UZEjFsXTL._AC_SR255,340_.jpg",
    name: "The North Face",
    desc:"Thermoball Eco Parka",
    price:"199.99",
    strikedoffprice:"250.00",
    rating:"5",
    cat:"Clothing",
    color:"Black",
 },
 {
  image_url:
      "https://m.media-amazon.com/images/I/81YNz6pP9HS._AC_SR255,340_.jpg",
    name: "Brooks",
    desc:"Ghost 14",
    price:"109.35",
    strikedoffprice:"130.00",
    rating:"4",
    cat:"Sneaker",
    color:"Black",
 },
 {
  image_url:
      "https://m.media-amazon.com/images/I/71cRqNlWEdL._AC_SR255,340_.jpg",
    name: "adidas",
    desc:"Copa Sense.3 Firm Ground",
    price:"64.18",
    strikedoffprice:"80.00",
    rating:"5",
    cat:"Sneaker",
    color:"Blue",
 },
 {
  image_url:
      "https://m.media-amazon.com/images/I/81xtnwwjAhL._AC_SR255,340_.jpg",
    name: "New Balance",
    desc:"Dynasoft Nitrel v4",
    price:"62.59",
    strikedoffprice:"74.99",
    rating:"4",
    cat:"Sneaker",
    color:"Brown",
 },
 {
  image_url:
      "https://m.media-amazon.com/images/I/71bE0Yc5t7L._AC_SR255,340_.jpg",
    name: "New Balance",
    desc:"FuelCell Shift TR",
    price:"79.38",
    strikedoffprice:"99.99",
    rating:"4",
    cat:"Sneaker",
    color:"White",
 },
 {
  image_url:
      "https://m.media-amazon.com/images/I/71lvrj8i+kS._AC_SR255,340_.jpg",
    name: "New Balance",
    desc:"Nergize Sport",
    price:"49.65",
    strikedoffprice:"64.99",
    rating:"4",
    cat:"Sneaker",
    color:"Black",
 },
 {
        image_url:
      "https://m.media-amazon.com/images/I/71SgBeT9itL._AC_SR255,340_.jpg",
    name: "UGG",
    desc:"Ansley",
    price:"69.97",
    strikedoffprice:"99.95",
    rating:"5",
    cat:"Slipper",
    color:"red",  
   },
   {
        image_url:
      "https://m.media-amazon.com/images/I/71uk3c0gdRL._AC_SR255,340_.jpg",
    name: "Foamtreads",
    desc:"Jewel",
    price:"44.00",
    strikedoffprice: "50.95",
    rating:"5",
    cat:"Slipper",
    color:"white",  
   },
   {
        image_url:
      "https://m.media-amazon.com/images/I/71HtL1wmuSL._AC_SR255,340_.jpg",
    name: "Ola Friend",
    desc:"Bella",
    price: "99.95",
    strikedoffprice:"109.95",
    rating:"4",
    cat:"Slipper",
    color:"red",  
   },
   {
        image_url:
      "https://m.media-amazon.com/images/I/7149ml4zYmL._AC_SR255,340_.jpg",
    name: "TEMPURE-PEDIC",
    desc:"Sloann",
    price:"39.35",
    strikedoffprice:"53.95",
    rating:"5",
    cat:"Slipper",
    color:"gray",  
   },

]

var Boot=womensBoot.filter(function(elem){
    return elem.cat=="Boot"
})
console.log(Boot)
localStorage.setItem("womenBoot",JSON.stringify(Boot))
var boot=JSON.parse(localStorage.getItem("womenBoot"))||[]
display(boot)
document.querySelector("#size").innerText=boot.length+" Total Items Found"
function display(data){
    data.forEach(function (elem,ind){
        var box=document.createElement("div")
        var image=document.createElement("img")
        image.src=elem.image_url;
        var box2=document.createElement("div")
        var name=document.createElement("h4")
        name.innerText=elem.name;
        name.id="name"
        name.addEventListener("click",function(){
          cartfun(elem)
        })
        var desc=document.createElement("p")
      desc.innerText=elem.desc;

      var box3=document.createElement("div")
      var rate=document.createElement("p")
      rate.innerText="Rating: "+elem.rating+"/5";

      var price=document.createElement("p")
      price.innerText="$"+(elem.price-(elem.price*25)/100).toFixed(2);
      var strk_price=document.createElement("p")
      strk_price.innerText="MSRP $" +elem.price;
     
      box3.append(price,strk_price)
      box2.append(name,desc,rate,box3)
      var cat=document.createElement("h3")
      cat.innerText=elem.cat;

      box.append(image,box2)
      items.append(box)

        
    })
}
function cartfun(elem){
  console.log(elem)
localStorage.setItem("cartData",JSON.stringify(elem))
window.location.href="cart.html"
}
var selected=document.querySelector("#sort")
selected.addEventListener("change",sortfun)

function sortfun(){
    items.innerHTML=""
    if(selected.value=="LowtoHigh")
    {
       
     boot.sort(function (a,b){
         var x=Number(a.price)
         var y=Number(b.price)
         return x-y;
     })
     localStorage.setItem("womenBoot",JSON.stringify(boot))
     console.log(boot)
     display(boot)
}
if(selected.value=="HightoLow")
    {
       
     boot.sort(function (a,b){
         var x=Number(a.price)
         var y=Number(b.price)
         return y-x;
     })
     localStorage.setItem("womenBoot",JSON.stringify(boot))
     console.log(boot)
     display(boot)
}
if(selected.value=="Customer rating")
    {
       
     boot.sort(function (a,b){
         var x=Number(a.rating)
         var y=Number(b.rating)
         return x-y;
     })
     localStorage.setItem("womenBoot",JSON.stringify(boot))
     console.log(boot)
     display(boot)
}
if(selected.value=="Customer rating")
    {
       
     boot.sort(function (a,b){
         var x=Number(a.rating)
         var y=Number(b.rating)
         return x-y;
     })
     localStorage.setItem("womenBoot",JSON.stringify(boot))
     console.log(boot)
     display(boot)
}
if(selected.value=="Best Seller")
    {
       
     boot.sort(function (a,b){
         if(a.name>b.name)
         {
          return 1;
         }
         if(a.name<b.name)
         {
          return -1;
         }
         if(a.name=b.name)
         {
          return 0;
         }
     })
     localStorage.setItem("womenBoot",JSON.stringify(boot))
     console.log(boot)
     display(boot)
}

}

var cloths=document.querySelector("#cloths")
cloths.addEventListener("click",clothingfun)
cloths.id="clothsid"
function clothingfun(){
  items.innerHTML=""
  var clothes=boot.filter(function (elem){
    return elem.cat=="Clothing"
    
  })
  console.log(clothes)
  localStorage.setItem("womenBoot",JSON.stringify(clothes))
  var clothsArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(clothsArr)
}

var shoes=document.querySelector("#shoes")
shoes.addEventListener("click",shoesfun)
shoes.id="shoesid"
function shoesfun(){
  items.innerHTML=""
  var shoes=boot.filter(function (elem){
    return elem.cat=="Boot"
    
  })
  console.log(shoes)
  localStorage.setItem("womenBoot",JSON.stringify(shoes))
  var shoesArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(shoesArr)
}


var slipper=document.querySelector("#slipper")
slipper.addEventListener("click",slipperfun)
slipper.id="slipperid"
function slipperfun(){
  items.innerHTML=""
  var slipper=boot.filter(function (elem){
    return elem.cat=="Slipper"
    
  })
  console.log(slipper)
  localStorage.setItem("womenBoot",JSON.stringify(slipper))
  var slipperArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(slipperArr)
}


var sneaker=document.querySelector("#sneaker")
sneaker.addEventListener("click",sneakerfun)
sneaker.id="sneakerid"
function sneakerfun(){
  items.innerHTML=""
  var sneaker=boot.filter(function (elem){
    return elem.cat=="Sneaker"
    
  })
  console.log(sneaker)
  localStorage.setItem("womenBoot",JSON.stringify(sneaker))
  var sneakerArr=JSON.parse(localStorage.getItem("womenBoot"))
  display(sneakerArr)
}