var scandals = [
    {
        image_url: "https://m.media-amazon.com/images/I/71Xl6052zOL._AC_SR255,340_.jpg",
        brand : "Birkenstock",
        name : "Soley by Papillio",
        price : 140,
        category : "Heeled Sandals",
        features : "Arch Support",
        color : "Pink"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71RBOTQ3R1L._AC_SR255,340_.jpg",
        brand : "Birkenstock",
        name : "Namica by Papillio",
        price: 145,
        category : "Heeled Sandals",
        features : "Arch Support",
        color : "Brown"

    },{
        image_url: "https://m.media-amazon.com/images/I/81Guq1UHUNL._AC_SR255,340_.jpg",
        brand : "LifeStride",
        name : "Yaya",
        price : 59,
        category : "Flat Sandals",
        features : "Strappy",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/71LhawpKXAL._AC_SR255,340_.jpg",
        brand : "Sorel",
        name : "Kinetic Sandal",
        price : 89,
        category : "Flat Sandals",
        features : "Strappy",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/61YrpaLMgUL._AC_SR255,340_.jpg",
        brand : "Crocs",
        name : "Brooklyn Mid",
        price : 45,
        category : "Heeled Sandals",
        features : "Vegan",
        color : "Pink"

    },{
        image_url: "https://m.media-amazon.com/images/I/71l9EWH4Z7L._AC_SR255,340_.jpg",
        brand : "Sofft",
        name : "Innins",
        price : 109,
        category : "Heeled Sandals",
        features : "Vegan",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/61HgSZhbiDS._AC_SR255,340_.jpg",
        brand : "Journee",
        name : "Loucia",
        price : 95,
        category : "Heeled Sandals",
        features : "Arch Support",
        color : "Pink"

    },{
        image_url: "https://m.media-amazon.com/images/I/81Wvx-A1zHL._AC_SR255,340_.jpg",
        brand : "Rockport",
        name : "Briah Perf Sling",
        price : 90,
        category : "Heeled Sandals",
        features : "Arch Support",
        color : "Golden"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71dUXaKfz8L._AC_SR255,340_.jpg",
        brand : "Clarks",
        name : "Jillian",
        price : 64,
        category : "Flat Sandals",
        features : "Leather Outsole",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71lA63x-djL._AC_SR255,340_.jpg",
        brand : "LifeStride",
        name : "Socialite",
        price : 69,
        category : "Heeled Sandals",
        features : "Leather Outsole",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71bs+ZKz-oL._AC_SR255,340_.jpg",
        brand : "Clarks",
        name : "Jillian",
        price : 95,
        category : "Heeled Sandals",
        features : "Leather Outsole",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71unBhoXRUL._AC_SR255,340_.jpg",
        brand : "Sofft",
        name : "Sosie",
        price : 139,
        category : "Flat Sandals",
        features : "Leather Outsole",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71hqIt1RPPL._AC_SR255,340_.jpg",
        brand : "Clarks",
        name : "Merlian",
        price : 51,
        category : "Flat Sandals",
        features : "Leather Outsole",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71miYz8WSmL._AC_SR255,340_.jpg",
        brand : "Clarks",
        name : "Drift",
        price : 139,
        category : "Flat Sandals",
        features : "Vegan",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/71XwJik0U0L._AC_SR255,340_.jpg",
        brand : "Clarks",
        name : "Giselle Sea",
        price : 129,
        category : "Heeled Sandals",
        features : "Vegan",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/71DdIDNSHUL._AC_SR255,340_.jpg",
        brand : "Clarks",
        name : "Drift Ease",
        price : 139,
        category : "Heeled Sandals",
        features : "Vegan",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/71UqUq229tL._AC_SR255,340_.jpg",
        brand : "Birkenstock",
        name : "Madrid",
        price : 140,
        category : "Flat Sandals",
        features : "Vegan",
        color : "Brown"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/61t2ZACz5hL._AC_SR255,340_.jpg",
        brand : "Birkenstock",
        name : "Arizona",
        price : 110,
        category : "Flat Sandals",
        features : "Vegan",
        color : "Black"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/715lYqeN6RL._AC_SR255,340_.jpg",
        brand : "Birkenstock",
        name : "Giselle",
        price : 139,
        category : "Heeled Sandals",
        features : "Veegan",
        color : "Brown"

    }
]
display(scandals)
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

      var filterrole = scandals.filter(function (elem){
        return elem.color == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }

    document.querySelector("#Category").addEventListener("change" ,v);

    function v()
    {
      var ccv = document.querySelector("#Category").value;

      var filterrole = scandals.filter(function (elem){
        return elem.category == ccv;
     });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Features").addEventListener("change"  ,x);

    function x()
    {
        
      var ccv = document.querySelector("#Features").value;

      var filterrole = scandals.filter(function (elem){
        return elem.features == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Brand").addEventListener("change" ,y);

    function y()
    {
    
      var ccv = document.querySelector("#Brand").value;

      var filterrole = scandals.filter(function (elem){
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
        scandals.sort(function (a,b){
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
    
        display(scandals)

      }
      if(selec=="ZtoA")
      {
        scandals.sort(function (a,b){
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
        display(scandals)

      }
      if(selec == "HTL")
      {
        scandals.sort(function (a,b)
        {
          return b.price - a.price;

        })
        display(scandals)

      }

      if(selec == "LTH")
      {
        scandals.sort(function (a,b)
        {
          return a.price - b.price;

        })
        display(scandals)

      }
    
    }
   



  