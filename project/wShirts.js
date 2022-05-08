var shirts = [
    {
        image_url: "https://m.media-amazon.com/images/I/71Mgu569xkL._AC_SR255,340_.jpg",
        brand : "Hanes",
        name : "Women's Stretch Cotton Raglan Sleeve Tee",
        price : 12,
        category : "T-shirt",
        features : "Cotton",
        color : "White"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71lgpGBzomL._AC_SR255,340_.jpg",
        brand : "Hanes",
        name : "Women's Stretch Cotton Raglan Sleeve Tee",
        price : 12.00,
        category : "T-shirt",
        features : "Cotton",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/817ErVtDTeL._AC_SR255,340_.jpg",
        brand : "Three Dots",
        name : "100% Cotton Heritage Knit 3/4 Sleeve British Tee",
        price : 46,
        category : "T-shirt",
        features : "Cotton",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/81NUmvlrMjL._AC_SR255,340_.jpg",
        brand : "Three Dots",
        name : "100% Cotton Heritage Knit 3/4 Sleeve British Tee",
        price : 46,
        category : "T-shirt",
        features : "Cotton",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71oGuJYADkL._AC_SR255,340_.jpg",
        brand : "adidas",
        name : "Tennis Graphic Tank Top",
        price : 20,
        category : "Tank Top",
        features : "Rayon",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/61ogp7l3BML._AC_SR255,340_.jpg",
        brand : "adidas",
        name : "Own The Run Tee",
        price : 20,
        category : "Tank Top",
        features : "Rayon",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/712KyhTcrsL._AC_SR255,340_.jpg",
        brand : "adidas",
        name : "Marimekko x Adidas Training Tank",
        price : 30,
        category : "T-shirt",
        features : "Cotton",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/81Zrq0f-4aL._AC_SR255,340_.jpg",
        brand : "CeCe",
        name : "3/4 Sleeve Clip Dot Knit Top",
        price : 55,
        category : "Tank Top",
        features : "Rayon",
        color : "Green"

    },{
        image_url: "https://m.media-amazon.com/images/I/81v+iX1ozkL._AC_SR255,340_.jpg",
        brand : "CeCe",
        name : "Long Sleeve Split-Neck Chiffon Blouse w/ Ruffles",
        price : 50,
        category : "Blouses",
        features : "Cotton",
        color : "Blue"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/81p-seZWD6L._AC_SR255,340_.jpg",
        brand : "CeCe",
        name : "Volumnious Sleeve Mock Neck Top",
        price : 55,
        category : "Blouses",
        features : "Cotton",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/81d0ktKWizS._AC_SR255,340_.jpg",
        brand : "Liverpool",
        name : "Flutter Sleeve Pleated Neck Top",
        price : 37,
        category : "Blouses",
        features : "Cotton",
        color : "Brown"

    },{
        image_url: "https://m.media-amazon.com/images/I/816EWLYbeOL._AC_SR255,340_.jpg",
        brand : "Liverpool",
        name : "Double Layer Sleeveless Woven Shell",
        price : 89,
        category : "Blouses",
        features : "Cotton",
        color : "Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/8128i3zM7CL._AC_SR255,340_.jpg",
        brand : "Liverpool",
        name : "Mock Neck Long Sleeve Ribbed Tee",
        price : 51,
        category : "T-shirt",
        features : "Cotton",
        color : "Pink"

    },{
        image_url: "https://m.media-amazon.com/images/I/71pgNw4dBTL._AC_SR255,340_.jpg",
        brand : "Liverpool",
        name : "Square Neck 3/4 Sleeve",
        price : 68,
        category : "T-shirt",
        features : "Cotton",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71MlNi62jGL._AC_SR255,340_.jpg",
        brand : "Columbia",
        name : "Sun Trek Long Sleeve",
        price : 32,
        category : "T-shirt",
        features : "Rayon",
        color : "Pink"

    },{
        image_url: "https://m.media-amazon.com/images/I/71otQJEYIPL._AC_SR255,340_.jpg",
        brand : "Columbia",
        name : "Sun Trek Hooded",
        price : 37,
        category : "T-shirt",
        features : "Cotton",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/71kZvdc9aeS._AC_SR255,340_.jpg",
        brand : "Columbia",
        name : "Tidal Tee",
        price : 33,
        category : "Tank Top",
        features : "Cotton",
        color : "Pink"

    },{
        image_url: "https://m.media-amazon.com/images/I/71cOa6YNgiL._AC_SR255,340_.jpg",
        brand : "Columbia",
        name : "Sun Drifter™ Woven Short Sleeve",
        price : 34,
        category : "T-shirt",
        features : "Rayon",
        color : "Blue"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71+fKb1LsHL._AC_SR255,340_.jpg",
        brand : "Columbia",
        name : "Sun Drifter™ Woven Short Sleeve",
        price : 33,
        category : "T-shirt",
        features : "Rayon",
        color : "White"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71IOlLod1NL._AC_SR255,340_.jpg",
        brand : "Columbia",
        name : "Tidal Tee™ 1/4 Zip",
        price : 35,
        category : "Tank Top",
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
   



  