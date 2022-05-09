var mensShoes = 
[
    {
      image_url: "https://m.media-amazon.com/images/I/71XEupMowHL._AC_SX255_.jpg",
      name : "Size 14 & Up"
       
    },
    {
        image_url :"https://m.media-amazon.com/images/I/71h4xglKhOL._AC_SX255_.jpg",
        name :"Reebok Work"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/71Q1q8RDveL._AC_SX255_.jpg",
        name : "Lifestyle Sneakers"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/71-+cpQ-7GL._AC_SX255_.jpg",
        name : "Slides"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/71TKQBWXpIS._AC_SX255_.jpg",
        name : "Boat Shoes"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/711Nx+B3BOL._AC_SX255_.jpg",
        name : "Clarks"
    }
];
display(mensShoes);
function display(arr)
{
   document.querySelector("#container2").innerHTML=""
   
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
    document.querySelector("#container2").append(aa);
      

  })

}
var Shoes = 
[
  {
    image_url : "https://m.media-amazon.com/images/G/01/2022/mens-shoes/MENS-GOLF-SHOES-MAY-TRIPTYCH-500X500.jpg",
    head : "Golf Footwear: No Mulligans Needed",
    subhead : "Explore cleats and non-cleats for the clubhouse or course.",
    link : "SHOP MEN'S GOLF FOOTWEAR"
  },
  {
      image_url : "https://m.media-amazon.com/images/G/01/2022/mens-shoes/MENS-SPRING-SANDALS-NEW-ARRIVALS-MAY-TRIPTYCH-500X500.jpg",
      head : "Spring Sandals: Tackle the Weekends",
      subhead : "Get the most out of your time off with comfy, cool designs!",
      link : "SHOP MEN'S SPRING SAANDALS"
  },
  {
      image_url : "https://m.media-amazon.com/images/G/01/2022/mens-shoes/MENS-WORK-SHOES-MAY-TRIPTYCH-500X500.jpg",
      head : "Work Shoes: Safety First, Always",
      subhead : "Get the job done in these durable favorites approved for work!",
      link : "SHOP MEN'S WORK SHOES"
  }

];
displayf(Shoes)
function displayf(arr)
{
  document.querySelector("#container11").innerHTML=""
   
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
    document.querySelector("#container11").append(aa);
      

  })

}
var jhu = 
[
  {
    image_url : "https://m.media-amazon.com/images/I/71HjtGYW+7L._AC_SX255_.jpg",
    name : "OluKai Tuahine",

    price : "$99.95",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/61zJ9VFheZL._AC_SX255_.jpg",
    name : "OluKai Ulele",
    price : "$79.95",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/71pBcFjJ3eL._AC_SX255_.jpg",
    name : "OluKai Moku Pae",
    price : "$119.95",


  }

];
  displayff(jhu)

function displayff(arr)
{
  document.querySelector("#container12").innerHTML=""
   
  arr.map(function (elem)
  {
    var aa = document.createElement("div");
    aa.className="box100"
    var ff = document.createElement("div");
    ff.className="box99"
    var gf = document.createElement("img");
    gf.className="img456"
    gf.setAttribute("src" , elem.image_url);
    var ffg = document.createElement("p")
    ffg.className="para123"

    var bb = document.createElement("a");
    bb.setAttribute("href","")
    bb.innerText=elem.name;
    bb.className="lalu"

    var nn = document.createElement("p");
    nn.innerText=elem.price;
    nn.className="ppk";

      
      
      
    




      
      

     


    ffg.append(bb)
    ff.append(gf)
    aa.append(ff,ffg,nn);
    document.querySelector("#container12").append(aa);
      

  })

}
var photos = [
  {
    image_url : "https://www.zappos.com/boutiques/449/Nike_Header081617.jpg",
    name : "Nike"
  },
  {
    image_url : "https://www.zappos.com/boutiques/2154/nikekids_header.jpg",
    name : "Nike Kids"
  },
  {
    image_url : "https://www.zappos.com/boutiques/184/ugg_header_092116.jpg",
    name : "UGG"
  },
  {
    image_url : "https://www.zappos.com/boutiques/124/vans_header_031717.jpg",
    name : "Vans"
  },
  {
    image_url : "https://www.zappos.com/boutiques/179/nb_header170922.jpg",
    name : "New Balance"
  },
  {
    image_url : "https://www.zappos.com/boutiques/164/Clarks_header030514.jpg",
    name : "Clarks"
  },
];
displayv(photos)
function displayv(arr)
{
   document.querySelector("#container100").innerHTML=""
   
  arr.map(function (elem)
  {
      
      
      
    var aa = document.createElement("div");
    aa.className="class1"
    var cc = document.createElement("div");
    cc.className="class2"


    var ava = document.createElement("img");
    ava.setAttribute("src" ,elem.image_url)
    ava.className="img90"
    var xx = document.createElement("p");
    xx.className="para09"

    var dda = document.createElement("a");
    dda.className="aas"
    dda.innerText=elem.name;
    dda.setAttribute("href" ,"")
    xx.append(dda)

      
      

     


     
    cc.append(ava);
    aa.append(cc,xx);
    document.querySelector("#container100").append(aa);
      

  })

}









