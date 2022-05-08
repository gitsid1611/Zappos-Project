var source = [
    {
        image_url : "https://m.media-amazon.com/images/I/711wjdlgaSL._AC_SX255_.jpg",
        name : "Shirts & Tops"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/71EbA8wasRL._AC_SX255_.jpg",
        name : "Jean Shorts"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/71ftvof09wS._AC_SX255_.jpg",
        name : "Matching Yoga Sets"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/71dVTWxfR6L._AC_SX255_.jpg",
        name : "Casual Dresses"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/710mA10TjzL._AC_SX255_.jpg",
        name : "Swim New Arrivals"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/71ixqpNDv+L._AC_SX255_.jpg",
        name : "View All"
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
        image_url : "https://m.media-amazon.com/images/G/01/2022/womens/BROADCAST-CLOTHING-SWIMWEAR-COVERUPS-MAY-TRIPTYCH-500X500.jpg",
        head : "Women's Swimwear & Cover-Ups",
        subhead : "Make a splash in sublime swim separates and breezy cover-ups!",
        link : "SHOP WOMEN'S SWIMWEAR & COVER-UPS"
    },
    {
        image_url : "https://m.media-amazon.com/images/G/01/2022/womens/WOMENS-TEES-TANKS-SHORTS-MAY-TRIPTYCH-500X500.jpg",
        head : "Your Spring Spotlight: Tees, Tanks, & Shorts",
        subhead : "Choose versatile pieces you can mix and match with ease!",
        link : "SHOP TEES, TANKS , & SHORTS"
    },
    {
        image_url : "https://m.media-amazon.com/images/G/01/2022/womens/WOMENS-YOGA-MAY-TRIPTYCH-500X500.jpg",
        head : "Breathe Easier: Yoga Essentials",
        subhead : "Look for matching sets, towels, blocks, mats and other yoga gear!",
        link : "SHOP YOGA ESSENTIALS"
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
    nn.className="booo"
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
    image_url : "https://m.media-amazon.com/images/I/61ayGshnZFL._AC_SX255_.jpg",
    name : "Momper Romper No Waist Slip-on Jumpsuit ",

    price : "$75.00",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/71qIJPgaddL._AC_SX255_.jpg",
    name : "Beyond Yoga Maternity Spacedye Slim Racerback Tank",
    price : "$82.00"


  },
  {
    image_url : "https://m.media-amazon.com/images/I/7133GU-uJqL._AC_SX255_.jpg",
    name : " Angel Maternity Maternity Bike Shorts - Two-Piece Set",
    price : "$49.95",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/61xaM8J+4JL._AC_SX255_.jpg",
    name : " Analise Maternity/Nursing Mommy & Me Five-Piece PJ Set. By Everly Grey. $98.00.  ",
    price : "$98.00",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/71aUj+Tm3FL._AC_SX255_.jpg",
    name : "Ingrid & Isabel Maternity Active Moto Leggings",
    price : "$98.90",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/710adxuS0LL._AC_SX255_.jpg",
    name : "Calvin Klein Underwear Reimagined Heritage Maternity Unlined Bralette",
    price : "$20.00",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/61OPleOZm2L._AC_SX255_.jpg",
    name : "NOM Maternity Rhys Nursing PJ Top",
    price : "$40.00",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/81O3rVHHFpL._AC_SX255_.jpg",
    name : "HUE Ultra Soft Denim Maternity Skimmer",
    price : "$50.00",


  }

];
displayff(jhu)

function displayff(arr)
{
  document.querySelector("#box1").innerHTML=""
   
  arr.map(function (elem)
  {
    var aa = document.createElement("div");
    aa.className="box34"
    var ff = document.createElement("div");
    var gf = document.createElement("img");
    gf.className="ggh"
    gf.setAttribute("src" , elem.image_url);
    var ffg = document.createElement("p")
    

    var bb = document.createElement("a");
    bb.setAttribute("href","")
    bb.innerText=elem.name;
    bb.className="bbh"

    var nn = document.createElement("p");
    nn.innerText=elem.price;
    nn.className="price";

      
      
      
    




      
      

     


    ffg.append(bb)
    ff.append(gf)
    aa.append(ff,ffg,nn);
    document.querySelector("#box1").append(aa);
      

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