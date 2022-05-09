var cData=JSON.parse(localStorage.getItem("cartData"))
console.log(cData)
var items=document.querySelector("#products")
display(cData)
function display(data){
    var box=document.createElement("div")
    var image=document.createElement("img")
    image.src=data.image_url;
    image.id="imgs"
    var box2=document.createElement("div")
    box2.id="box2"
   
    var name=document.createElement("h4")
    name.innerText=data.name;
    name.id="name"
    
    var desc=document.createElement("p")
  desc.innerText=data.desc;
  desc.id="desc"

  
 

  var price=document.createElement("p")
  price.innerText="$"+(data.price-(data.price*25)/100).toFixed(2);
  price.id="price"


  var strk_price=document.createElement("p")
  strk_price.innerText="MSRP $" +data.price;
  var rate=document.createElement("p")
  rate.innerText="Rating: "+data.rating+"/5";
  rate.id="rate"
  strk_price.id="msrp_price"
 
  var cat=document.createElement("h3")
  cat.innerText=data.cat;


  var p=document.createElement("p")
p.innerText="or 4 interest-free payments of $27.49 with"
p.id="para"

var col=document.createElement("p")
col.id="colr"
col.innerText="Color: "+data.color

var bttn=document.createElement("button")
bttn.id="bttn"
bttn.innerText="Add to Cart";
bttn.addEventListener("click",function(){
  addtocartFun(data)
})




var para2=document.createElement("p")
p.innerHTML=`<p>This fits true to size.<p>
<p><a href="">Cant find your size?</a><p>`

var para3=document.createElement("p")
para3.innerText="FREE upgraded shipping & returns with"
para3.id="para3"

var img2=document.createElement("img")
img2.src="https://www.zappos.com/marty-assets/amazon-prime.2821774c351a0e9079f230ad4b312a71.svg"
 img2.id="img2"

 document.querySelector("#products>h3").innerText="Product Name: "+data.name

  box2.append(name,desc,price,strk_price,rate,p,col,bttn,para2,para3,img2)
  box.append(image,box2,)
  items.append(box)

}
function addtocartFun(elem){
  alert("Product has been successfully added to your cart ")
}




