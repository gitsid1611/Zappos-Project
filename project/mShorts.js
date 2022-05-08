var shorts = [
    {
        image_url: "https://m.media-amazon.com/images/I/71F0giNyayL._AC_SR255,340_.jpg",
        brand : "Puma",
        name : "Big Fleece Logo 10 Shorts",
        price : 25,
        category : "Basic",
        features : "Cotton",
        color : "Grey"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/61h+wk4CjHL._AC_SR255,340_.jpg",
        brand : "Puma",
        name : "Big Fleece Logo 10 Shorts",
        price :30 ,
        category : "Workout",
        features : "Cotton",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/716ZjByFKHL._AC_SR255,340_.jpg",
        brand : "Puma",
        name : "PUMA Men's Rebel Woven 9 Shorts",
        price : 40,
        category : "Workout",
        features : "Nylon",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/71YPNvF-4fL._AC_SR255,340_.jpg",
        brand : "Calvin Klein",
        name : "Archive Logo Fleece Shorts",
        price :47 ,
        category :"Basic" ,
        features : "Polyester",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71RD+RQP0YL._AC_SR255,340_.jpg",
        brand : "Calvin Klein",
        name : "Men's Casual Twill Print Shorts",
        price : 36 ,
        category : "Workout",
        features : "Polyester",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/81qImJ2rioS._AC_SR255,340_.jpg",
        brand : "Calvin Klein",
        name : "Men's Hybrid Shorts",
        price : 55,
        category : "Flat Front",
        features : "Cotton",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/61uO5OaPW0L._AC_SR255,340_.jpg",
        brand : "Liverpool",
        name : "Modern Twill Shorts",
        price : 80,
        category : "Basic",
        features : "Polyester",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/715cgOxzRpL._AC_SR255,340_.jpg",
        brand : "Liverpool",
        name : "Modern Twill Shorts",
        price :90 ,
        category : "Workout",
        features : "Cotton",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/61AOnP8UaBL._AC_SR255,340_.jpg",
        brand : "Liverpool",
        name : "Modern Twill Shorts",
        price : 100 ,
        category : "Flat Front",
        features : "Polyester",
        color : "Yellow"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71qOmfSI4IL._AC_SR255,340_.jpg",
        brand : "Liverpool",
        name : "Human Rights Now Shorts",
        price :75 ,
        category : "Flat Front",
        features : "Nylon",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/61I0edHBLSS._AC_SR255,340_.jpg",
        brand : "Reebok",
        name : "Pride Bike Shorts",
        price :60 ,
        category : "Basic",
        features : "Cotton",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/71TOEZjAulL._AC_SR255,340_.jpg",
        brand : "Reebok",
        name : "Austin Shorts",
        price : 35,
        category : "Workout",
        features : "Cotton",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/711WtHR2odL._AC_SR255,340_.jpg",
        brand : "Reebok",
        name : "One Series Running Shorts",
        price : 35,
        category : "Basic",
        features : "Nylon",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/71XD-S9WiRL._AC_SR255,340_.jpg",
        brand : "Pepe Jeans",
        name : "George Shorts",
        price : 85,
        category : "Workout",
        features : "Nylon",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/71eedc7F7KL._AC_SR255,340_.jpg",
        brand : "Pepe Jeans",
        name : "Stanley Shorts",
        price : 75 ,
        category : "Flat Front",
        features : "Polyester",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/61irWEINkDL._AC_SR255,340_.jpg",
        brand : "Tommy Hilfiger",
        name : "Chino Shorts",
        price : 45,
        category : "Flat Front",
        features : "Polyester",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/71cFJg2ealL._AC_SR255,340_.jpg",
        brand : "Tommy Hilfiger",
        name : "Fleece Sweatshorts",
        price : 55,
        category : "Workout",
        features : "Cotton",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/71Exj64sLKL._AC_SR255,340_.jpg",
        brand : "Tommy Hilfiger",
        name : "Six-Pocket Cargo Shorts",
        price : 44,
        category : "Basic",
        features : "Nylon",
        color : "Black"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71fYyF4MG5L._AC_SR255,340_.jpg",
        brand : "Fila",
        name : "Maaz Shorts",
        price : 24,
        category : "Workout",
        features : "Polyester",
        color : "Blue"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71VnyaPE4zS._AC_SR255,340_.jpg",
        brand : "Fila",
        name : "Mirza Shorts",
        price :32 ,
        category : "Basic",
        features : "Polyster",
        color : "Grey"

    }
];
display(shorts)
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

      var filterrole = shorts.filter(function (elem){
        return elem.color == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }

    document.querySelector("#Category").addEventListener("change" ,v);

    function v()
    {
      var ccv = document.querySelector("#Category").value;

      var filterrole = shorts.filter(function (elem){
        return elem.category == ccv;
     });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Features").addEventListener("change"  ,x);

    function x()
    {
        
      var ccv = document.querySelector("#Features").value;

      var filterrole = shorts.filter(function (elem){
        return elem.features == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Brand").addEventListener("change" ,y);

    function y()
    {
    
      var ccv = document.querySelector("#Brand").value;

      var filterrole = shorts.filter(function (elem){
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
        shorts.sort(function (a,b){
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
    
        display(shorts)

      }
      if(selec=="ZtoA")
      {
        shorts.sort(function (a,b){
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
        display(shorts)

      }
      if(selec == "HTL")
      {
        shorts.sort(function (a,b)
        {
          return b.price - a.price;

        })
        display(shorts)

      }

      if(selec == "LTH")
      {
        shorts.sort(function (a,b)
        {
          return a.price - b.price;

        })
        display(shorts)

      }
    
    }
   
    
    
   
   


  