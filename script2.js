var malmiktari = 0;
var arti = document.getElementById("artibuton");
var eksi = document.getElementById("eksibuton");
var sepet = document.getElementById("malmiktari");
var addtocart = document.getElementById("addtocart");
var next = document.getElementById("next");
var previous = document.getElementById("previous");
var resimler = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"]

var sayi = 0;
function ilerle() {
    sayi = (sayi + 1 ) % resimler.length;
    buyukresim.src = resimler[sayi];    
}

function enbuyukresim() {
    document.getElementById("enbuyuk").style.display = "block";
    
}

document.getElementById("buyukresim").addEventListener("click", enbuyukresim)
function gerile () {
    sayi = (sayi - 1 + resimler.length) % resimler.length;
    buyukresim.src = resimler[sayi];
}
previous.addEventListener("click", gerile);
next.addEventListener("click", ilerle);
arti.addEventListener("click", function () {
    malmiktari = malmiktari + 1;
    sepet.innerHTML = malmiktari;
    
});
eksi.addEventListener("click", function () {
    malmiktari = malmiktari - 1;
    
    if (malmiktari < 0) {
        malmiktari = 0
        
    }
    sepet.innerHTML = malmiktari;
    
});
sepet.innerHTML = malmiktari;
var itemsayisi = 0;

addtocart.addEventListener("click", function () {
    itemsayisi += malmiktari;
    document.getElementById("itemsayisi").innerHTML = itemsayisi;
    
})

var miniresim1 = document.getElementById("miniresim1");
var miniresim2 = document.getElementById("miniresim2");
var miniresim3 = document.getElementById("miniresim3");
var miniresim4 = document.getElementById("miniresim4");
var buyukresim = document.getElementById("buyukresim");


miniresim1.addEventListener("click", function () {
    buyukresim.src = "images/image-product-1.jpg";
     
 })

miniresim2.addEventListener("click", function () {
   buyukresim.src = "images/image-product-2.jpg";
    
})

miniresim3.addEventListener("click", function () {
    buyukresim.src = "images/image-product-3.jpg";
     
 })

 miniresim4.addEventListener("click", function () {
    buyukresim.src = "images/image-product-4.jpg";
     
 })
