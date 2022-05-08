var swimwear = [
    {
        image_url: "https://m.media-amazon.com/images/I/51qNWpZCFHL._AC_SR255,340_.jpg",
        brand : "Lauren",
        name : "Foiled Jersy Cocktail",
        price : 175,
        category : "Crew-Neck",
        features : "Cotton",
        color : "Pink"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/51yJK-XOkFL._AC_SR255,340_.jpg",
        brand : "Lauren",
        name : "Burnout Velvet",
        price : 175,
        category : "Crew-Neck",
        features : "Cotton",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/51muy9FFXgL._AC_SR255,340_.jpg",
        brand : "Lauren",
        name : "Doubled Faced",
        price : 245,
        category : "Crew-Neck",
        features : "Rayon",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/61jSanwzhBL._AC_SR255,340_.jpg",
        brand : "BeBe",
        name : "High Slit Knit",
        price : 86,
        category : "V-Neck",
        features : "Cotton",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/61I8nvLmP6L._AC_SR255,340_.jpg",
        brand : "BeBe",
        name : "High Slit Knit",
        price : 86,
        category : "V-Neck",
        features : "Rayon",
        color : "Red"

    },{
        image_url: "https://m.media-amazon.com/images/I/61g5sO9-jmL._AC_SR255,340_.jpg",
        brand : "Halston",
        name : "Women's Cap Sleeve",
        price : 375,
        category : "Crew-Neck",
        features : "Nylon",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71cPpclOYmL._AC_SR255,340_.jpg",
        brand : "Halston",
        name : "Women's A-line Asymmetric Ruched Dress",
        price : 179,
        category : "Crew-Neck",
        features : "Nylon",
        color : "Green"

    },{
        image_url: "https://m.media-amazon.com/images/I/71XRIR4etcL._AC_SR255,340_.jpg",
        name : "Betsy & Adam",
        price : 195,
        category : "V-Neck",
        features : "Nylon",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/81ESnkOP1mL._AC_SR255,340_.jpg",
        brand : "Alex",
        name : "Short Embroidered",
        price : 146,
        category : "V-Neck",
        features : "Cotton",
        color : "Grey"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/81fGSLPm1fL._AC_SR255,340_.jpg",
        brand : "Alex",
        name : "Tea Length",
        price : 219,
        category : "Crew-Neck",
        features : "Nylon",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/51R7hU3tllL._AC_SR255,340_.jpg",
        brand : "Lauren",
        name : "Flutter Sleve",
        price : 219,
        category : "Crew-Neck",
        features : "Cotton",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71R2UX5Nr0L._AC_SR255,340_.jpg",
        brand : "BeBe",
        name : "Flutter Sleve",
        price : 129,
        category : "V-Neck",
        features : "Nylon",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/61vkKkz+0LL._AC_SR255,340_.jpg",
        brand : "Alex",
        name : "Short Printed",
        price : 189,
        category : "Crew-Neck",
        features : "Cotton",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/71ur5Ef2+3L._AC_SR255,340_.jpg",
        brand : "Alex",
        name : "Tea Length",
        price : 218,
        category : "V-Neck",
        features : "Nylon",
        color : "Pink"

    },{
        image_url: "https://m.media-amazon.com/images/I/716YiYNvUKL._AC_SR255,340_.jpg",
        brand : "Betsy & Adam",
        name : "Short Glitter Flutter",
        price : 219,
        category : "Crew-Neck",
        features : "Cotton",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/61-MUUBtbLL._AC_SR255,340_.jpg",
        brand : "Lauren",
        name : "Belted Dress",
        price : 219,
        category : "Crew-Neck",
        features : "Rayon",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71sdZxJmVqL._AC_SR255,340_.jpg",
        brand : "Alex",
        name : "Midi Length Dress",
        price : 219,
        category : "V-Neck",
        features : "Cotton",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/61Vuudcoz2L._AC_SR255,340_.jpg",
        brand : "XSCAPE",
        name : "Long Ity with Caviar Beaded Sides",
        price : 249,
        category : "V-Neck",
        features : "Cotton",
        color : "Grey"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71awdEg2rfL._AC_SR255,340_.jpg",
        brand : "XSCAPE",
        name : "Long Spaghetti Strap 3-D Flower Ballgown",
        price : 189,
        category : "Crew-Neck",
        features : "Rayon",
        color : "Brown"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71+50dY9mZL._AC_SR255,340_.jpg",
        brand : "XSCAPE",
        name : "High-Low Raised Flower",
        price : 220,
        category : "V-Neck",
        features : "Cotton",
        color : "Pink"

    }
]
display(swimwear)
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

      var filterrole = swimwear.filter(function (elem){
        return elem.color == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }

    document.querySelector("#Category").addEventListener("change" ,v);

    function v()
    {
      var ccv = document.querySelector("#Category").value;

      var filterrole = swimwear.filter(function (elem){
        return elem.category == ccv;
     });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Features").addEventListener("change"  ,x);

    function x()
    {
        
      var ccv = document.querySelector("#Features").value;

      var filterrole = swimwear.filter(function (elem){
        return elem.features == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Brand").addEventListener("change" ,y);

    function y()
    {
    
      var ccv = document.querySelector("#Brand").value;

      var filterrole = swimwear.filter(function (elem){
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
        swimwear.sort(function (a,b){
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
    
        display(swimwear)

      }
      if(selec=="ZtoA")
      {
        swimwear.sort(function (a,b){
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
        display(swimwear)

      }
      if(selec == "HTL")
      {
        swimwear.sort(function (a,b)
        {
          return b.price - a.price;

        })
        display(swimwear)

      }

      if(selec == "LTH")
      {
        swimwear.sort(function (a,b)
        {
          return a.price - b.price;

        })
        display(swimwear)

      }
    
    }
   



  