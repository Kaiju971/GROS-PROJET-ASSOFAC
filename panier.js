//sauvegarde du panier dans le dossier local//
function saveBasket(basket){
  console.log("save "+product);
    localStorage.setItem("basket",JSON.stringify(basket));
}

//fonction panier quand il n'a rien dedans//
function getBasket(){
    let basket = localStorage.getItem("basket");
    if(basket == null){
        return[];
    }else{
        return JSON.parse(basket);
    }
}

//ajout d'article dans le panier + sauvegardde du panier//
function addBasket(product){
    console.log("add "+product);
    let basket = getBasket();
    let foundProduct = basket.find(p=> p.id == product.id);
    if(foundProduct != undefined){
foundProduct.quantity++;
    }
    else{product.quantity = 1;
        basket.push(product);
    } 
saveBasket(basket);
}

//suppression des articles//
function removeFromBasket(product){
    let basket = getBasket();
    basket = basket.filter(p=> p.id != product.id);
    saveBasket(basket);
}

//changer la quantité dans le panier//
function changeQuantity(product,quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p=> p.id != product.id);
    if(foundProduct != undefined){
        foundProduct.quantity += quantity;  
        if(foundProduct.quantity <= 0){
            removeFromBasket(foundProduct);
        }else{
            saveBasket(basket);
        }
    }  
}

//changer la quantité de produit//
function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for(let product of basket){
        number += product.quantity;
    }
    return number;
}

//calcul du panier= x produit * x prix//
function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for(let product of basket){
        total += product.quantity * product.price;
    }
    return total;
}
const addToBasket = (prod) =>{
  alert(prod);
}
    let listArea = document.querySelector("#consolesretroContainer");
    var prod = "";
    let buttons = [];
    let cell = `<div ><h1>La page Des Consoles RETRO</h1> </div>`;
      const list = ([["Atari2600","./2600s.jpg"],
      ["Intellivision","./intellivision.png"]
      ,["ColecoVision","./ColecoVision.jpg"]
      ,["SEGA Master System","./SegaMasterSystem.jpg"]
      ,["NINTENDO Nes","./nes.png"]
      ,["SEGA Genesis","./Genesis.png"]
      ,["TurboGrafx","./turbografx.jpg"]
      ,["NeoGeo","./Neo-Geo.jpg"]
      ,["NINTENDO Snes","./snes.png"]
      ,["3DO","./3DO.png"],
      ["ATARI Jaguar","./Jaguar.jpg"],
      ["Sony Playstation 1","./PS1.png"],
      ["SEGA Saturn","./Saturn.png"],
      ["NINTENDO 64","./nintendo64.jpg"],
      ["SEGA Dreamcast","./dreamcast.jpg"]]);

      list.forEach((element,index) => ( 
        cell = `${cell} 
        <div>${element[0]}
        <img src = ${element[1]} class="img-fluid rounded float-start col11"/>
        <button id = "buttonclick${index}">
          <span class="box">
            529.99€ Ajouter au panier
          <div class="star-1">
            <svg fill="#ea8b19"width="5px" height="5px" viewBox="0 0 36.00 36.00" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#ffffff" stroke-width="0.00036" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>euro-solid</title> <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.42,25.16A10.88,10.88,0,0,1,9.23,21H5.84a1,1,0,0,1,0-2h3c0-.35-.05-.71-.05-1.07s0-.63,0-.93h-3a1,1,0,0,1,0-2H9.19A10.86,10.86,0,0,1,25.38,8.69a1.25,1.25,0,0,1-1.32,2.12A8.36,8.36,0,0,0,11.82,15h9.36a1,1,0,0,1,0,2H11.33a7.72,7.72,0,0,0,0,2h9.82a1,1,0,0,1,0,2H11.87a8.36,8.36,0,0,0,12.22,4,1.25,1.25,0,1,1,1.33,2.12Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0.1"></rect> </g></svg>
          </div>
          <div class="star-2">
            <svg fill="#ea8b19"width="25px" height="25px" viewBox="0 0 36.00 36.00" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#ffffff" stroke-width="0.00036" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>euro-solid</title> <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.42,25.16A10.88,10.88,0,0,1,9.23,21H5.84a1,1,0,0,1,0-2h3c0-.35-.05-.71-.05-1.07s0-.63,0-.93h-3a1,1,0,0,1,0-2H9.19A10.86,10.86,0,0,1,25.38,8.69a1.25,1.25,0,0,1-1.32,2.12A8.36,8.36,0,0,0,11.82,15h9.36a1,1,0,0,1,0,2H11.33a7.72,7.72,0,0,0,0,2h9.82a1,1,0,0,1,0,2H11.87a8.36,8.36,0,0,0,12.22,4,1.25,1.25,0,1,1,1.33,2.12Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>
          </div>
          <div class="star-3">
            <svg fill="#ea8b19"width="30px" height="30px" viewBox="0 0 36.00 36.00" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#ffffff" stroke-width="0.00036" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>euro-solid</title> <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.42,25.16A10.88,10.88,0,0,1,9.23,21H5.84a1,1,0,0,1,0-2h3c0-.35-.05-.71-.05-1.07s0-.63,0-.93h-3a1,1,0,0,1,0-2H9.19A10.86,10.86,0,0,1,25.38,8.69a1.25,1.25,0,0,1-1.32,2.12A8.36,8.36,0,0,0,11.82,15h9.36a1,1,0,0,1,0,2H11.33a7.72,7.72,0,0,0,0,2h9.82a1,1,0,0,1,0,2H11.87a8.36,8.36,0,0,0,12.22,4,1.25,1.25,0,1,1,1.33,2.12Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0"></rect> </g></svg>
          </div>
          <div class="star-4">
            <svg fill="#ea8b19"width="10px" height="10px" viewBox="0 0 36.00 36.00" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#ffffff" stroke-width="0.00036" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>euro-solid</title> <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.42,25.16A10.88,10.88,0,0,1,9.23,21H5.84a1,1,0,0,1,0-2h3c0-.35-.05-.71-.05-1.07s0-.63,0-.93h-3a1,1,0,0,1,0-2H9.19A10.86,10.86,0,0,1,25.38,8.69a1.25,1.25,0,0,1-1.32,2.12A8.36,8.36,0,0,0,11.82,15h9.36a1,1,0,0,1,0,2H11.33a7.72,7.72,0,0,0,0,2h9.82a1,1,0,0,1,0,2H11.87a8.36,8.36,0,0,0,12.22,4,1.25,1.25,0,1,1,1.33,2.12Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0.1"></rect> </g></svg>
          </div>
          <div class="star-5">
            <svg fill="#ea8b19"width="20px" height="20px" viewBox="0 0 36.00 36.00" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#ffffff" stroke-width="0.00036" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>euro-solid</title> <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.42,25.16A10.88,10.88,0,0,1,9.23,21H5.84a1,1,0,0,1,0-2h3c0-.35-.05-.71-.05-1.07s0-.63,0-.93h-3a1,1,0,0,1,0-2H9.19A10.86,10.86,0,0,1,25.38,8.69a1.25,1.25,0,0,1-1.32,2.12A8.36,8.36,0,0,0,11.82,15h9.36a1,1,0,0,1,0,2H11.33a7.72,7.72,0,0,0,0,2h9.82a1,1,0,0,1,0,2H11.87a8.36,8.36,0,0,0,12.22,4,1.25,1.25,0,1,1,1.33,2.12Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0.1"></rect> </g></svg>
          </div>
          <div class="star-6">
            <svg fill="#ea8b19"width="50px" height="50px" viewBox="0 0 36.00 36.00" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#ffffff" stroke-width="0.00036" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>euro-solid</title> <path class="clr-i-solid clr-i-solid-path-1" d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.42,25.16A10.88,10.88,0,0,1,9.23,21H5.84a1,1,0,0,1,0-2h3c0-.35-.05-.71-.05-1.07s0-.63,0-.93h-3a1,1,0,0,1,0-2H9.19A10.86,10.86,0,0,1,25.38,8.69a1.25,1.25,0,0,1-1.32,2.12A8.36,8.36,0,0,0,11.82,15h9.36a1,1,0,0,1,0,2H11.33a7.72,7.72,0,0,0,0,2h9.82a1,1,0,0,1,0,2H11.87a8.36,8.36,0,0,0,12.22,4,1.25,1.25,0,1,1,1.33,2.12Z"></path> <rect x="0" y="0" width="36" height="36" fill-opacity="0.1"></rect> </g></svg>
          </div>
          </span>
        </button></div>`
        
      ));

    listArea.innerHTML = cell;

    list.forEach((element,index) => {
      let myButton = buttons[index];
      myButton = document.querySelector("#buttonclick" + index);
      myButton.addEventListener("click", () => addBasket(element[0]));
    })

   