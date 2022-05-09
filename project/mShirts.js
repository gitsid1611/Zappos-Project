var shirts = [
    {
        image_url: "https://m.media-amazon.com/images/I/71jHO2zTrnL._AC_SR255,340_.jpg",
        brand : "Adidas",
        name : "Future Icon 3-Bar Tee",
        price : 30,
        category : "T-shirt",
        features : "Cotton",
        color : "Pink"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71Juw8eDAsL._AC_SR255,340_.jpg",
        brand : "Adidas",
        name : "Heathered 3G Tank",
        price : 55,
        category : "Tank Top",
        features : "Cotton",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/71ETawgdEIL._AC_SR255,340_.jpg",
        brand : "Adidas",
        name : "Badge of Sport Tee",
        price : 25,
        category : "T-shirt",
        features : "Rayon",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71QK+PGV22L._AC_SR255,340_.jpg",
        brand : "Adidas",
        name : "Tiger Camo Tee",
        price : 35,
        category : "Tank Top",
        features : "Cotton",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/81eyb5jVroS._AC_SR255,340_.jpg",
        brand : "Hanes",
        name : "Beefy-T Long Sleeve Henley",
        price : 40,
        category : "Activewear shirts",
        features : "Polyester",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71sbI515BZS._AC_SR255,340_.jpg",
        brand : "Hanes",
        name : "Beefy-T Long Sleeve Henley",
        price : 40,
        category : "Activewear shirts",
        features : "Polyester",
        color : "Red"

    },{
        image_url: "https://m.media-amazon.com/images/I/71dprCNVIiL._AC_SR255,340_.jpg",
        brand : "Hanes",
        name : "Sport Men's Performance Quarter-Zip Pullover",
        price : 25,
        category : "Activewear shirts",
        features : "Polyester",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/71igqfdI6mL._AC_SR255,340_.jpg",
        brand : "Billabong",
        name : "Crayon Wave Short Sleeve Tee",
        price :18 ,
        category : "Tank Top",
        features : "Polyester",
        color : "Blue"
        
    },{
        image_url: "https://m.media-amazon.com/images/I/71FIah-lZ9L._AC_SR255,340_.jpg",
        brand : "Billabong",
        name : "Billy's Burgers Short Sleeve Tee",
        price : 28,
        category : "T-shirt",
        features : "Cotton",
        color : "White"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/81eQdSgMFiL._AC_SR255,340_.jpg",
        brand : "Tommy Bahama",
        name : "Bahama Coast Paradiso",
        price :55 ,
        category : "Activewear shirts",
        features : "Cotton",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/81rM+ppd0VL._AC_SR255,340_.jpg",
        brand : "Skechers",
        name : "On the Road Long Sleeve Tee",
        price :32 ,
        category : "Activewear shirts",
        features : "Polyester",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/818P0LgvweL._AC_SR255,340_.jpg",
        brand : "Skechers",
        name : "On the Road Long Sleeve Tee",
        price :28 ,
        category : "Tank Top",
        features : "Cotton",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/71YKqYLNA7L._AC_SR255,340_.jpg",
        brand : "Quicksilver",
        name : "Gold Lines",
        price : 35,
        category : "T-shirts",
        features : "Cotton",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71JpjPGZrpL._AC_SR255,340_.jpg",
        brand : "Quicksilver",
        name : "Comp Logo Short Sleeve Tee",
        price :23 ,
        category : "T-shirts",
        features : "Polyester",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/71Tm7QTY6lL._AC_SR255,340_.jpg",
        brand : "Quicksilver",
        name : "The Stretch-Cotton Shirt",
        price :24 ,
        category : "Activewear shirts",
        features : "Cotton",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/818yPP9f1aL._AC_SR255,340_.jpg",
        brand : "Pepe",
        name : "Ainsley",
        price : 18,
        category : "T-shirts",
        features : "Cotton",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/71H+Rny-ZnL._AC_SR255,340_.jpg",
        brand : "Oakley",
        name : "Retro Frog",
        price : 45,
        category : "Activewear shirts",
        features : "Cotton",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/71bPeBIrKAL._AC_SR255,340_.jpg",
        brand : "Oakley",
        name : "Sunrise V12",
        price : 25,
        category : "Activewear shirts",
        features : "Polyester",
        color : "Black"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71feLIUWzyL._AC_SR255,340_.jpg",
        brand : "Oakley",
        name : "Gradient B21",
        price : 23,
        category : "T-shirts",
        features : "Polyester",
        color : "Red"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/81gcZRz4gXL._AC_SR255,340_.jpg",
        brand : "Oakley",
        name : "Gradient B21",
        price :20 ,
        category : "Activewear shirts",
        features : "Cotton",
        color : "Blue"

    }
]
display(shirts)
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

      var filterrole = shirts.filter(function (elem){
        return elem.color == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }

    document.querySelector("#Category").addEventListener("change" ,v);

    function v()
    {
      var ccv = document.querySelector("#Category").value;

      var filterrole = shirts.filter(function (elem){
        return elem.category == ccv;
     });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Features").addEventListener("change"  ,x);

    function x()
    {
        
      var ccv = document.querySelector("#Features").value;

      var filterrole = shirts.filter(function (elem){
        return elem.features == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Brand").addEventListener("change" ,y);

    function y()
    {
    
      var ccv = document.querySelector("#Brand").value;

      var filterrole = shirts.filter(function (elem){
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
        shirts.sort(function (a,b){
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
    
        display(shirts)

      }
      if(selec=="ZtoA")
      {
        shirts.sort(function (a,b){
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
        display(shirts)

      }
      if(selec == "HTL")
      {
        shirts.sort(function (a,b)
        {
          return b.price - a.price;

        })
        display(shirts)

      }

      if(selec == "LTH")
      {
        shirts.sort(function (a,b)
        {
          return a.price - b.price;

        })
        display(shirts)

      }
    
    }
   
    
    
   
   


  