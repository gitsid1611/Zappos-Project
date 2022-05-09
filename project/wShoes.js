var source = [
    {
        image_url : "https://m.media-amazon.com/images/I/71CQi6Ia19L._AC_SX255_.jpg",
        name : "Comfort Heels"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/71z7xYJdgCL._AC_SX255_.jpg",
        name : "Flats"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/71-nkJoZKNL._AC_SX255_.jpg",
        name : "Heels Sized 11 & Up"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/61gh-vti2eL._AC_255_.jpg",
        name : "Running Shoes"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/51bcDq6oUAL._AC_255_.jpg",
        name : "Water-Friendly Shoes"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/61gNgL7bdKL._AC_255_.jpg",
        name : "Naturalizer"
    }
];
display(source);
function display(arr)
{
   document.querySelector("#com1").innerHTML=""
   
  arr.map(function (elem)
  {
      
      
      
    var aa = document.createElement("div");
    aa.className="name1"
    var cc = document.createElement("div");
    cc.className="name2"


    var ava = document.createElement("img");
    ava.setAttribute("src" ,elem.image_url)
    ava.className="kkl"

    var dda = document.createElement("p");
    dda.className="jjk"
    dda.innerText=elem.name;

      
      

     


      
    cc.append(ava);
    aa.append(cc,dda);
    document.querySelector("#com1").append(aa);
      

  })

};
var shoes = [
    {
        image_url : "https://m.media-amazon.com/images/G/01/2022/womens-shoes/WOMENS-CLOGS-MULES-MAY-TRIPTYCH-500X500_copy.jpg",
        head : "Clogs & Mules: Made for Everyday Style",
        subhead : "Discover wear-all-day faves from Madewell, Sam Edelman, and more!",
        link : "SHOP WOMEN'S CLOGS & MULES"
    },
    {
        image_url : "https://m.media-amazon.com/images/G/01/2022/womens-shoes/WOMENS-LIFESTYLE-SNEAKERS-MAY-TRIPTYCH-500X500.jpg",
        head : "New Sneaker Standouts: Practical & Playful",
        subhead : "Experience eye-popping colors and prints in these comfy silhouettes!",
        link : "SHOP NEW WOMEN'S SNEAKERS"
    },
    {
        image_url : "https://m.media-amazon.com/images/G/01/2022/womens-shoes/WOMENS-SPOTLIGHT-OCCASION-MAY-TRIPTYCH-500X500.jpg",
        head : "Spotlight: A Heel for Every Occasion",
        subhead : "Find on-trend styles for proms, weddings, and other formal events!",
        link : "SHOP EVENT-READY HEELS"
    }
];
displayf(shoes)
function displayf(arr)
{
  document.querySelector("#com6").innerHTML=""
   
  arr.map(function (elem)
  {
      
      
      
    var aa = document.createElement("div");
    aa.className="box12"
    var cc = document.createElement("div");
    cc.className=""


    var ava = document.createElement("img");
    ava.setAttribute("src" ,elem.image_url)
    ava.className="II"

    var dda = document.createElement("h2");
    dda.className="poo"
    dda.innerText=elem.head;
    var gg = document.createElement("p");
    gg.innerText=elem.subhead;
    gg.className="para"
    var nn = document.createElement("p");
    var bb = document.createElement("a");
    bb.setAttribute("href","")
    bb.innerText=elem.link;
    nn.append(bb);




      
      

     


      
    cc.append(ava);
    aa.append(cc,dda,gg,nn);
    document.querySelector("#com6").append(aa);
      

  })

};
var jhu = 
[
  {
    image_url : "https://m.media-amazon.com/images/I/71DjLQithOL._AC_SX255_.jpg",
    name : "Dansko Reece",

    price : "$124.95",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/71P+VvW8G8L._AC_SX255_.jpg",
    name : "Dansko Racquel",
    price : "$109.95",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/716ijsVoliL._AC_SX255_.jpg",
    name : "Dansko Susie",
    price : "$119.95",


  }

];
displayff(jhu)

function displayff(arr)
{
  document.querySelector("#lo").innerHTML=""
   
  arr.map(function (elem)
  {
    var aa = document.createElement("div");
    aa.className="div78"
    
    var gf = document.createElement("img");
    gf.className="tt"
    gf.setAttribute("src" , elem.image_url);
    var ffg = document.createElement("p")
    ffg.className="you"

    var bb = document.createElement("a");
    bb.setAttribute("href","")
    bb.innerText=elem.name;
    bb.className="namess"

    var nn = document.createElement("p");
    nn.innerText=elem.price;
    nn.className="par";

      
      
      
    




      
      

     


    ffg.append(bb)
    
    aa.append(gf,ffg,nn);
    document.querySelector("#lo").append(aa);
      

  })

}
var style =[
  {
    image_url : "https://m.media-amazon.com/images/I/71Nuvf5AE5S._AC_SX255_.jpg",
    name : "Casual"

  },
  {
    image_url : "https://m.media-amazon.com/images/I/81BQCQcoYrL._AC_SX255_.jpg",
    name : "Athletic"

  },
  {
    image_url : "https://m.media-amazon.com/images/I/81befrpiD2L._AC_SX255_.jpg",
    name : "Outdoor"

  },
  {
    image_url : "https://m.media-amazon.com/images/I/61curFJBgoL._AC_SX255_.jpg",
    name : "Dress"

  }
];
displays(style);
function displays(arr)
{
  document.querySelector("#com99").innerHTML=""
   
  arr.map(function (elem)
  {
    var aa = document.createElement("div");
    aa.className="fal";
    var img = document.createElement("img");
    img.setAttribute("src", elem.image_url);
    img.className="lkj"

    var na = document.createElement("h2");
    na.innerText=elem.name;
    na.className="jal"

  


    
  

      
      
      
    




      
      

     


  
    
    aa.append(img,na);
    document.querySelector("#com99").append(aa);
      

  })

}

