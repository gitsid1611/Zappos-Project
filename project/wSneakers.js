var shoes = [
    {
        image_url: "https://m.media-amazon.com/images/I/81zeWxGFVQS._AC_SR255,340_.jpg",
        brand : "Brooks",
        name : "Ghost 14",
        price : 139,
        category : "Running Shoes",
        features : "Light weight",
        color : "Purple"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/81ez2UcSYeL._AC_SR255,340_.jpg",
        brand : "Brooks",
        name : "Adrenaline GTS 21",
        price : 109,
        category : "Running Shoes",
        features : "Light weight",
        color : "Navy Blue"

    },{
        image_url: "https://m.media-amazon.com/images/I/71FU9+fEmlL._AC_SR255,340_.jpg",
        brand : "Brooks",
        name : "Glycerin 19",
        price : 189,
        category : "Atheletic Shoes",
        features : "Light weight",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/71fOYCOKrzL._AC_SR255,340_.jpg",
        brand : "Brooks",
        name : "Ghost 11",
        price : 159,
        category : "Atheletic Shoes",
        features : "Light weight",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/81Ui5QnRC-L._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Minimus TR",
        price : 119,
        category : "Lifestyle Sneakers",
        features : "Arch Support",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/7130bGdEJnL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Made in US 990v5",
        price : 184,
        category : "Lifestyle Sneakers",
        features : "Dance Shoes",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71YTaVbCdLL._AC_SR255,340_.jpg",
        brand : "Timberland PRO",
        name : "Drivetrain Composite",
        price : 109,
        category : "Atheletic Shoes",
        features : "Arch support",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71ZBzoVRazL._AC_SR255,340_.jpg",
        brand : "On",
        name : "Cloudflow",
        price : 135,
        category : "Running Shoes",
        features : "Light weight",
        color : "Black"

    },{
        image_url: "https://m.media-amazon.com/images/I/71Yfsz4YvRL._AC_SR255,340_.jpg",
        brand : "Reebok Work",
        name : "Print Work ULTK",
        price : 160,
        category : "Lifestyle Sneakers",
        features : "Atheletic Shoes",
        color : "Black"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/81E-w06BxeL._AC_SR255,340_.jpg",
        brand : "Converse",
        name : "Chuck Taylor",
        price : 145,
        category : "Running Shoes",
        features : "Light weight",
        color : "Grey"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/81JtJJKyh0L._AC_SR255,340_.jpg",
        brand : "Reebok Work",
        name : "Sublite Legend",
        price : 109,
        category : "Lifestyle Sneakers",
        features : "Dance Shoes",
        color : "Pink"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/71UxXJaKfHL._AC_SR255,340_.jpg",
        brand : "Vans",
        name : "Classic SlipOn",
        price : 109,
        category : "Cleats",
        features : "Slip Resistant",
        color : "White"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/7130bGdEJnL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Fresh Foam Hierro",
        price : 159,
        category : "Lifestyle Sneakers",
        features : "Light Weight",
        color : "Black"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/61E6Gy5fLzL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Fresh Foam Tempo",
        price : 119,
        category : "Lifestyle Sneakers",
        features : "Running Shoes",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/71-njnm+tQL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Made in US 990v5",
        price : 189,
        category : "Atheletic Shoes",
        features : "Light Weight",
        color : "Grey"

    },{
        image_url: "https://m.media-amazon.com/images/I/81Ui5QnRC-L._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Minimus TR",
        price : 190,
        category : "Atheletic Shoes",
        features : "Running Shoes",
        color : "Purple"

    },{
        image_url: "https://m.media-amazon.com/images/I/71zt2kqCqgL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "NB Nergize Sport",
        price : 52,
        category : "Lifestyle Sneakers",
        features : "Running Shoes",
        color : "White"

    },{
        image_url: "https://m.media-amazon.com/images/I/71t4c3YRynL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Fresh Foam Hierro",
        price : 139,
        category : "Atheletic Shoes",
        features : "Light Weight",
        color : "Yellow"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/81zFZvy4AOL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Fresh Foam Sport v2",
        price : 79,
        category : "Lifestyle Sneakers",
        features : "Running Shoes",
        color : "Blue"

    },
    {
        image_url: "https://m.media-amazon.com/images/I/81zhriXIsWL._AC_SR255,340_.jpg",
        brand : "New Balance",
        name : "Fresh Foam More Trail",
        price :164,
        category : "Lifestyle Sneakers",
        features : "Running Shoes",
        color : "Blue"

    }
];
display(shoes)
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

      var filterrole = shoes.filter(function (elem){
        return elem.color == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }

    document.querySelector("#Category").addEventListener("change" ,v);

    function v()
    {
      var ccv = document.querySelector("#Category").value;

      var filterrole = shoes.filter(function (elem){
        return elem.category == ccv;
     });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Features").addEventListener("change"  ,x);

    function x()
    {
        
      var ccv = document.querySelector("#Features").value;

      var filterrole = shoes.filter(function (elem){
        return elem.features == ccv;
      });
      console.log(filterrole);
      display(filterrole);

    }
    document.querySelector("#Brand").addEventListener("change" ,y);

    function y()
    {
    
      var ccv = document.querySelector("#Brand").value;

      var filterrole = shoes.filter(function (elem){
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
        shoes.sort(function (a,b){
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
    
        display(shoes)

      }
      if(selec=="ZtoA")
      {
        shoes.sort(function (a,b){
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
        display(shoes)

      }
      if(selec == "HTL")
      {
        shoes.sort(function (a,b)
        {
          return b.price - a.price;

        })
        display(shoes)

      }

      if(selec == "LTH")
      {
        shoes.sort(function (a,b)
        {
          return a.price - b.price;

        })
        display(shoes)

      }
    
    }
   
    
    
   
   


  