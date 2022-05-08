var mensCloth = [
    {
        image_url : "https://m.media-amazon.com/images/I/91FULk6h5QL._AC_SX255_.jpg",
        name :"Shirts & Tops"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/91K4coUfddL._AC_SX255_.jpg",
        name :"Mens's Workout Clothing"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/91xtYxbfA4L._AC_SX255_.jpg",
        name :"Jeans"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/81CIIhPUyZL._AC_SX255_.jpg",
        name :"View All"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/81BskSK6TzL._AC_SX255_.jpg",
        name :"Swimwear"
    },
    {
        image_url : "https://m.media-amazon.com/images/I/51LjGNkdmiL._AC_SX255_.jpg",
        name :"Big & Tall"
    }
]
display(mensCloth);
function display(arr)
{
   document.querySelector("#container45").innerHTML=""
   
  arr.map(function (elem)
  {
      
      
      
    var aa = document.createElement("div");
    aa.className="name1"
    var cc = document.createElement("div");
    cc.className="name2"


    var ava = document.createElement("img");
    ava.setAttribute("src" ,elem.image_url)
    ava.className="kkl"
    var nn = document.createElement("p");
    nn.className="para00"

    var dda = document.createElement("a");
    dda.className="jjk"
    dda.setAttribute("href" ,"");
    dda.innerText=elem.name;

      
      

     


    nn.append(dda);
    cc.append(ava);
    aa.append(cc,nn);
    document.querySelector("#container45").append(aa);
      

  })

}
var Shoes = 
[
  {
    image_url : "https://m.media-amazon.com/images/G/01/2022/Mens/MENS-TROPICAL-MAY-TRIPTYCH-500X500.jpg",
    head : "Trend Spotlight: Men's Tropical Prints",
    subhead : "Discover easy, unexpected prints that will elevate every outfit.",
    link : "Shop Men's Tropical Prints"
  },
  {
      image_url : "https://m.media-amazon.com/images/G/01/2022/Mens/MENS-SHORT-SLEEVES-MAY-TRIPTYCH-500X500.jpg",
      head : "Easy for Spring: Short-Sleeve Tees",
      subhead :"",
      
      
      link : "Shop Men's Short-Sleeve Tees"
  },
  {
      image_url : "https://m.media-amazon.com/images/G/01/2022/Mens/MENS-ACCESSORIES-MAY-TRIPTYCH-500X500.jpg",
      head : "Men's Bags & Accessories: Finishing Touches",
    
      subhead : "Find everything you need to complete your favorite looks!"
      ,link:"Find everything you need to complete your favorite looks!"
  }

];
displayf(Shoes)
function displayf(arr)
{
  document.querySelector("#container00").innerHTML=""
   
  arr.map(function (elem)
  {
      
      
      
    var aa = document.createElement("div");
    aa.className="div1"
    var cc = document.createElement("div");
    cc.className=""


    var ava = document.createElement("img");
    ava.setAttribute("src" ,elem.image_url)
    ava.className="imh"

    var dda = document.createElement("h2");
    dda.className="hhj"
    dda.innerText=elem.head;
    var gg = document.createElement("p");
    gg.innerText=elem.subhead;
    gg.className="sub"
    var nn = document.createElement("p");
    var bb = document.createElement("a");
    bb.setAttribute("href","")
    bb.className="aba"
    bb.innerText=elem.link;
    nn.append(bb);




      
      

     


      
    cc.append(ava);
    aa.append(cc,dda,gg,nn);
    document.querySelector("#container00").append(aa);
      

  })

}
var jhu = 
[
  {
    image_url : "https://m.media-amazon.com/images/I/71PVXGvXWGL._AC_SX255_.jpg",
    name : "Fundamental Coast Manny V-Neck ",

    price : "$59.00",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/81dGms00O4L._AC_SX255_.jpg",
    name : "Fundamental Coast Summer Andy Full Zip",
    price : "$98.00"


  },
  {
    image_url : "https://m.media-amazon.com/images/I/71PJkrHzK0L._AC_SX255_.jpg",
    name : "Fundamental Coast Manny Crew ",
    price : "$59.00",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/81RQTZPYLhL._AC_SX255_.jpg",
    name : "Fundamental Coast Mitch V",
    price : "$54.00",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/81FkaQ5vEpL._AC_SX255_.jpg",
    name : "Fundamental Coast Mitch V",
    price : "$54.00",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/61GDj8jdnSL._AC_SX255_.jpg",
    name : "Fundamental Coast Later 1/4 Zip",
    price : "$98.00",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/71xOhChv6uL._AC_SX255_.jpg",
    name : "Fundamental Coast Cove Joggers",
    price : "$79.99",


  },
  {
    image_url : "https://m.media-amazon.com/images/I/71gvuYVR-RL._AC_SX255_.jpg",
    name : "Fundamental Coast Later 1/4 Zip",
    price : "$79.99",


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