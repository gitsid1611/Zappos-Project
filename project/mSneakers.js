var sshoes = [
    {
        image_url: "https://m.media-amazon.com/images/I/71XWctpRHzL._AC_SR255,340_.jpg",
        brand : "Adidas",
        name : "Samba® Classic",
        price : 70,
        category : "Running Shoes",
        features : "Light Weight",
        color : "White"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/813klMTqBgL._AC_SR255,340_.jpg",
        brand : "Adidas",
        name : "Mundial Goal",
        price : 90,
        category : "Atheletic Shoes",
        features : "Recycle Material",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71e4W9L0d4L._AC_SR255,340_.jpg",
        brand : "Adidas",
        name : "Copa Sense.3 Firm Ground",
        price : 80,
        category : "Running Shoes",
        features : "Light Weight",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/814+i8jU55L._AC_SR255,340_.jpg",
        brand : "Caterpillar",
        name : "Streamline Composite Toe",
        price : 104,
        category : "Lifestyle Sneakers",
        features : "Recycle Material",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/81lzRdNol-L._AC_SR255,340_.jpg",
        brand : "Caterpillar",
        name : "ProRush Speed FX",
        price : 89,
        category : "Lifestyle Sneakers",
        features : "Light Weight",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/71VosD6yrcL._AC_SR255,340_.jpg",
        brand : "Caterpillar",
        name : "Invader ST",
        price : 105,
        category : "Running Shoes",
        features : "Waterproof",
        color : "Brown"

    },{
        image_url: "https://m.media-amazon.com/images/I/71AwHBk3AVL._AC_SR255,340_.jpg",
        brand : "Caterpillar",
        name : "Pro Rush Sr+",
        price : 75,
        category : "Lifestyle Sneakers",
        features : "Waterproof",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/81Zd2yc+2nL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Fresh Foam Arishi V3",
        price : 77,
        category : "Running Shoes",
        features : "Slip Resistant",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/81KdowiRDXL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Made in Us 990",
        price : 134,
        category : "Atheletic Shoes",
        features : "Light Weight",
        color : "White"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71oQ8VDZdXL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Steamline Composite",
        price : 103,
        category : "Running Shoes",
        features : "Light Weight",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/61aYo+k1+CL._AC_SR255,340_.jpg",
        brand : "GREATS",
        name : "Royale",
        price : 104,
        category : "Lifetyle Sneakers",
        features : "Slip Resistant",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/71ugFXSaiHL._AC_SR255,340_.jpg",
        brand : "GREATS",
        name : "Court Longwing",
        price : 199,
        category : "Lifestyle Sneakers",
        features : "Slip Resistant",
        color : "Brown"

    },{
        image_url: "https://m.media-amazon.com/images/I/71JgEuJAG0L._AC_SR255,340_.jpg",
        brand : "GREATS",
        name : "Court Longwing",
        price : 149,
        category : "Lifestyle Sneakers",
        features : "Waterproof",
        color : "Red"

    },{
        image_url: "https://m.media-amazon.com/images/I/717xamZ5aCL._AC_SR255,340_.jpg",
        brand : "GREATS",
        name : "Marcy Slip-on",
        price : 120,
        category : "Lifestyle Sneakers",
        features : "Light Weight",
        color : "Brown"

    },{
        image_url: "https://m.media-amazon.com/images/I/81j-8aNv2xL._AC_SR255,340_.jpg",
        brand : "GREATS",
        name : "Royale",
        price : 118,
        category : "Running Shoes",
        features : "Light Weight",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/71OjQESt96L._AC_SR255,340_.jpg",
        brand : "Camper",
        name : "Peu Cami",
        price : 170,
        category : "Atheletic Shoes",
        features : "Waterproof",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/61aYo+k1+CL._AC_SR255,340_.jpg",
        brand : "Camper",
        name : "Peu Touring",
        price : 140,
        category : "Running Shoes",
        features : "Slip Resistant",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/71SqOFaYQrL._AC_SR255,340_.jpg",
        brand : "Camper",
        name : "Peu Touring",
        price : 124,
        category : "Lifestyle Sneakers",
        features : "Light Weight",
        color : "BRown"

    }
];
display(sshoes)
function display(arr)
  {
      
    document.querySelector("#iio").innerHTML=""
   
    arr.map(function (elem)
    {
        
      
      
      
      var aa = document.createElement("div");
      aa.className="class"

      var ava = document.createElement("img");
      ava.setAttribute("src" ,elem.image_url)
      ava.className="image"

      var dda = document.createElement("h3");
      dda.innerText=elem.brand;
      dda.className="brand"

      var bb = document.createElement("p");
      bb.innerText=elem.name;
      bb.className="para"
      var suu = document.createElement("div");
      suu.innerHTML="&#36";
      suu.className="guu"

      var hh = document.createElement("p");
    //   hh.innerText="$";
      hh.innerHTML= elem.price;
      hh.className="pr"
      var ffg = document.createElement("div")
      ffg.className="rating";

      var ree = document.createElement("button");
      ree.className="boo"

    //   ree.addEventListener("click",pwe)
      var muu = document.createElement("i");
      muu.className="fa-solid fa-heart";
      muu.style.fontSize="25px"
      muu.style.position="relative"
      muu.style.background="transparent";
      muu.style.border="none";
      muu.style.outline="none";
      muu.style.color="red"
      
      ree.append(muu);
     

      


      

      var zz1 = document.createElement("input");
      zz1.type="radio"
      zz1.id="star1"
      var c1 = document.createElement("label");
      c1.id="star1"
      var zz2 = document.createElement("input");
      zz2.type="radio"
      zz2.id="star2";
      var c2 = document.createElement("label");
      c2.id="star2"
      var zz3 = document.createElement("input");
      zz3.id="star3";
      zz3.type="radio"
      var c3 = document.createElement("label");
      c3.id="star3"
      var zz4 = document.createElement("input");
      zz4.id="star4";
      zz4.type="radio";
      var c4 = document.createElement("label");
      c4.id="star4"
      var zz5 = document.createElement("input");
      zz5.id="star5"
      zz5.type="radio";
      var c5 = document.createElement("label");
      c5.id="star5"




      
      
      ffg.append(zz1,c1,zz2,c2,zz3,c3,zz4,c4,zz5,c5);

    //   var ff = document.createElement("button");
    //   ff.innerText="ADD TO CART";
    //   ff.className="node";


      aa.append(ree,ava,dda,bb,suu,hh,ffg);
      document.querySelector("#iio").append(aa);
      

    })

  }


  
  document.querySelector("#Colour").addEventListener("change" ,b);

    function b()
    {
        
      var ccv = document.querySelector("#Colour").value;

      var filterrole = sshoes.filter(function (elem){
        return elem.color == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }

    document.querySelector("#Category").addEventListener("change" ,v);

    function v()
    {
      var ccv = document.querySelector("#Category").value;

      var filterrole = sshoes.filter(function (elem){
        return elem.category == ccv;
     });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Features").addEventListener("change"  ,x);

    function x()
    {
        
      var ccv = document.querySelector("#Features").value;

      var filterrole = sshoes.filter(function (elem){
        return elem.features == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Brand").addEventListener("change" ,y);

    function y()
    {
    
      var ccv = document.querySelector("#Brand").value;

      var filterrole = sshoes.filter(function (elem){
        return elem.brand == ccv;
      });
      console.log(filterrole);
      display(filterrole);
      

    }
    document.querySelector("#ReLevance").addEventListener("change" , bbn)
    function bbn(){
      var selec = document.querySelector("#ReLevance").value;
      console.log(selec)

      if(selec == "AtoZ")
      {
        sshoes.sort(function (a,b){
          var x = a.name.toUpperCase();
          var y = b.name.toUpperCase();
          if(x> y)
          {
            return 1;

          }
          else if(x<y)
          {
            return -1

          }
          else
          {
            return 0;

          }
        });
    
        display(sshoes)

      }
      if(selec=="ZtoA")
      {
        sshoes.sort(function (a,b){
          var x = a.name.toUpperCase();
          var y = b.name.toUpperCase();
          if(x>y)
          {
            return -1;

          }
          else if(x < y)
          {
            return 1;

          }
          else 
          {
            return 0;

          }
        });
        display(sshoes)

      }
      if(selec == "HTL")
      {
        sshoes.sort(function (a,b)
        {
          return b.price - a.price;

        })
        display(sshoes)

      }

      if(selec == "LTH")
      {
        sshoes.sort(function (a,b)
        {
          return a.price - b.price;

        })
        display(sshoes)

      }
    
    }
   
    
    
   
   


  