var i = 1;
var n = 3;
var price = 40000;
function next(){
    if(i < n) i+= 1;
    else i = 1;
    
    document.getElementById("slide").setAttribute("src","img/slide"+ i+".png");
}
function back(){
    if(i > 1) i-= 1;
    else i = n;
    
    document.getElementById("slide").setAttribute("src","img/slide"+ i+".png");
}
function autoplay(){
    setInterval(next,3000);
}


function inc(x,p){
    a = parseInt(document.getElementById(x).value);
  
    document.getElementById(x).value = a + 1;
    document.getElementById(p).textContent = price * (a+1) / 1000 + ".000 VNĐ";
}
function dec(x,p){
    a = parseInt(document.getElementById(x).value);
    if(a > 1) {
        a -= 1;
        document.getElementById(p).textContent = price * (a) / 1000 + ".000 VNĐ";
    }
    document.getElementById(x).value = a;
}
function change(){
    alert("click the pic");
}
function changeLab(x, n){

    if(n == 1){
        document.getElementById(x).textContent = "Cơm đùi gà chiên mắm";
        document.getElementById('price').textContent = "45.000 VNĐ";
        document.getElementById("main-pic").setAttribute("src","img/menupic2.png");
        document.getElementById('numtxt').value = 1;
        document.getElementById('total').textContent = "45000 VNĐ";
        price = 45000;

    }
    if(n == 2){
        document.getElementById(x).textContent = "Má đùi gà chiên mắm";
        document.getElementById('price').textContent = "45.000 VNĐ";
        document.getElementById("main-pic").setAttribute("src","img/menupic3.png");
        document.getElementById('numtxt').value = 1;
        document.getElementById('total').textContent = "45000 VNĐ";
        price = 45000;

    }
    if(n == 3){
        document.getElementById(x).textContent = "Cơm gà Hội An";
        document.getElementById('price').textContent = "40.000 VNĐ";
        document.getElementById("main-pic").setAttribute("src","img/menupic1.png");
        document.getElementById('numtxt').value = 1;
        document.getElementById('total').textContent = "40000 VNĐ";
        price = 40000;

    }
}
function login_direct() {
    window.location.href = "login.html";
}

function cart_direct() {
    window.location.href = "cart.html";
}
function reser() {
    window.location.href = "index.html #reservation";
}

//chuyen sang trang detail

function detail_direct(n) {
    window.location.href = "food-detail.html";
    if(n == 1) {
       
        window.location.href = "food-detail.html?msg=dcm";
    }
    if(n == 2){
        window.location.href = "food-detail.html?msg=mcm";

    }
    if(n == 3){
        window.location.href = "food-detail.html?msg=gha";

    }
   
}

function selectMenuItem(selectedItem) {
            
    var menuItems = document.querySelectorAll("#menu-bar ul li a");

    menuItems.forEach(function (menuItem) {
        menuItem.classList.remove("menu_active");
    });

    selectedItem.classList.add("menu_active");
}
		