var items=document.querySelector("#items")
var mensBoot = [
  {
    image_url:
      "https://m.media-amazon.com/images/I/51QZinnlDKL._AC_SR255,340_.jpg",
    name: "Columbia ",
    desc:"Bahama Long Sleev Shirt",
    price:"55.00",
    rating:"5",
    cat:"Clothing",
    color:"blue",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/I/71aa244iMlL._AC_SR255,340_.jpg",
    name: "Columbia ",
    desc:"Bahama Long Sleev Shirt",
    price:"25",
    rating:"5",
    cat:"Clothing",
    color:"black",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/I/71qBLUQUKZL._AC_SR255,340_.jpg",
      name: "Columbia ",
    desc:"White Tshirt",
    price:"25.00",
    rating:"5",
    cat:"Clothing",
    color:"white",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/I/61UlieOAG8S._AC_SR255,340_.jpg",
      name:"Under Armour",
    desc:"brown Tshirt",
    price:"25.00",
    rating:"5",
    cat:"Clothing",
    color:"brown",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/I/71UDnU0AKwL._AC_SR255,340_.jpg",
      name:"Under Armour",
    desc:"Blue Tshirt",
    price:"25.00",
    rating:"5",
    cat:"Clothing",
    color:"blue",
  },
  {
    image_url:
      "https://m.media-amazon.com/images/I/81cutFHMZeL._AC_SR255,340_.jpg",
      name:"Under Armour",
    desc:"Black Tshirt",
    price:"24.00",
    rating:"5",
    cat:"Clothing",
    color:"black",
  },
  {
   image_url:
      "https://m.media-amazon.com/images/I/81CnPZ6frcL._AC_SR255,340_.jpg",
    name: "Iris Setter",
    desc:"Rockford 5 Waterproof",
    price:"119.99",
    rating:"4",
    cat:"Boot",
    color:"brown",
  },
   
  {
      image_url:
      "https://m.media-amazon.com/images/I/61IWluzdQYL._AC_SR255,340_.jpg",
    name: "clark",
    desc:"Morris peak Waterproof",
    price:"105.00",
    rating:"4",
    cat:"Boot",
    color:"white",
  
  },
  {
        image_url:
      "https://m.media-amazon.com/images/I/71b7+o4KgiL._AC_SR255,340_.jpg",
    name: "Avenger Work Boot",
    desc:"Ripsaw CT",
    price:"135.00",
    rating:"5",
    cat:"Boot",
    color:"black",
    
  },
   {
        image_url:
      "https://m.media-amazon.com/images/I/81YTLRXfl2L._AC_SR255,340_.jpg",
    name: "Direct attch 6 steel toe",
    desc:"Kymi",
    price:"165.00",
    rating:"5",
    cat:"Boot",
    color:"brown",
    
  },
   {
        image_url:
      "https://m.media-amazon.com/images/I/71P876CwFyL._AC_SR255,340_.jpg",
    name: "UGG",
    desc:"Classic Short II",
    price: "96.35",
    rating:"5",
    cat:"Boot",
    color:"red",
    
  },
  
 {
  image_url:
      "https://m.media-amazon.com/images/I/81YNz6pP9HS._AC_SR255,340_.jpg",
    name: "Brooks",
    desc:"Ghost 14",
    price:"109.35",
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
    rating:"4",
    cat:"Sneaker",
    color:"Black",
 },
 

]
localStorage.setItem("menBoot",JSON.stringify(mensBoot))
var boot=JSON.parse(localStorage.getItem("menBoot"))||[]
display(boot)
document.querySelector("#size").innerText=boot.length||0+" Total Items Found"
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
      desc.id="desc"

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
     localStorage.setItem("menBoot",JSON.stringify(boot))
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
     localStorage.setItem("menBoot",JSON.stringify(boot))
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
     localStorage.setItem("menBoot",JSON.stringify(boot))
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
     localStorage.setItem("menBoot",JSON.stringify(boot))
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
     localStorage.setItem("menBoot",JSON.stringify(boot))
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




