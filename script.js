

const handleLoad=()=>{
   location.href = "homepage.html";



}


let handleRegister=()=>{
let username=document.getElementById("username").value
let mob=document.getElementById("mob").value
let password=document.getElementById("password").value
let confirm_password=document.getElementById("confirm_password").value
// console.log(username,mob,password,confirm_password);
let user_details={
    name:username,
    mobile:mob,
    password:password
}
let users = window.localStorage.getItem("users");
users = users ? JSON.parse(users) : [];  // if null, assign empty array
users.push(user_details);
//JSON 
user_details=JSON.stringify(users)
// console.log(typeof(user_details));
//setting data in local storage 
if(password===confirm_password){
window.localStorage.setItem("users",user_details)
alert("user registerd succesfully")
location.href = "login.html";
}
else{
    alert("passwords do not match");  
}
}



//login code 

//we need to compare the user input with registered data 

function handleLogin(){
    let user_name=document.getElementById("user_name").value
    let user_password=document.getElementById("user_password").value
    // console.log(user_name,user_password);
    let reg_user_list=window.localStorage.getItem("users")
    //stored will be in string form
    // console.log(reg_user.name)
    reg_user_list=JSON.parse(reg_user_list)//converting the string back into object form
    // console.log(reg_user);
   
    let user_found=false
    reg_user_list.forEach((v,i,a)=>{
        if(user_name==v.name && user_password===v.password){
            alert("login successful")
            user_found=true
  
    }
    })
    if (user_found===true){
        //  alert("Login successful");
        location.assign("product.html");
    }else{
        alert("User not found, please register first.");
        location.assign("register.html")
    }



}



//JSON 

//javascript object notation 
// data format for imnformation exchange between the system

//text format  --strings

//strings 
//number


// stringify -->object to string form
// parse-->converts string to object
// "01111002221111100041101"












 const Products = [
      {
        "id":1,
      "title":"Fjallraven Backpack",
      "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "category":"men's clothing","price":109.95
    },
      {
        "id":2,
      "title":"Mens Slim Fit T-Shirts",
      "image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg",
      "category":"men's clothing","price":22.3
    },
      {
        "id":3,
      "title":"Mens Cotton Jacket",
      "image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "category":"men's clothing","price":55.99
    },
      {
        "id":4,
      "title":"Mens Casual Slim Fit",
      "image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "category":"men's clothing","price":15.99
    },
      {
        "id":5,
      "title":"John Hardy Bracelet",
      "image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      "category":"jewelery","price":695
    },
      {
        "id":6,
      "title":"Solid Gold Petite Micropave",
      "image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
      "category":"jewelery","price":168
    },
      {
        "id":7,
      "title":"White Gold Plated Princess",
      "image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      "category":"jewelery","price":9.99
    },
      {
        "id":8,
      "title":"Rose Gold Earrings",
      "image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      "category":"jewelery","price":10.99
    },
      {
        "id":9,
      "title":"WD 2TB External Hard Drive",
      "image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "category":"electronics","price":64
    },
      {
        "id":10,
        "title":"SanDisk SSD 1TB",
        "image":"https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "category":"electronics","price":109
    },
      {
        "id":11,
        "title":"Silicon Power 256GB SSD",
        "image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "category":"electronics","price":99
    },
      {
        "id":12,
        "title":"WD 4TB Gaming Drive",
        "image":"https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "category":"electronics","price":114
    },
      {
        "id":13,
        "title":"Acer 21.5 Inch Monitor",
        "image":"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "category":"electronics","price":599
    },
      {
        "id":14,
        "title":"Samsung 49-Inch Monitor",
        "image":"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "category":"electronics","price":999
    },
      {
        "id":15,
        "title":"Rain Jacket Women",
        "image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_.jpg",
        "category":"men's clothing","price":39.99
    },
      {
        "id":16,
        "title":"Women's Snowboard Jacket",
        "image":"https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "category":"men's clothing","price":56.99},
      {
        "id":17,
        "title":"Opna Women's Moisture",
        "image":"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "category":"men's clothing","price":7.95
    },
      {
        "id":18,
      "title":"DANVOUY Women's T Shirt",
      "image":"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "category":"men's clothing","price":12.99
    },
      {
        "id":19,"title":"Pierced Owl Tunnel Earrings",
      "image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","category":"jewelery","price":5.99},
      {
        "id":20,
        "title":"MBJ Women's Boat Neck",
        "image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "category":"men's clothing","price":9.85
    },
      {
        "id":21,
        "title":"Rain Jacket Women Windbreaker",
        "image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879-2.jpg",
        "category":"men's clothing","price":39.99
    },
      {
        "id":22,
        "title":"Lock & Love Women's Faux Leather Jacket",
        "image":"https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "category":"men's clothing",
        "price":29.95
    }
    ];

    function renderProducts(arr) {
      const container = document.getElementById("main-container");
      container.innerHTML = "";
      arr.forEach(val => {
        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = val.image;

        let title = document.createElement("h2");
        title.innerText = `${val.title} - $${val.price}`;

        card.appendChild(img);
        card.appendChild(title);
        container.appendChild(card);
      });
    }

    renderProducts(Products);

    function filterByCategory(category) {
      if (category === "") {
        renderProducts(Products);
      } else {
        const filtered = Products.filter(p => p.category === category);
        renderProducts(filtered);
      }
    }
