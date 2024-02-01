var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle(){
if(MenuItems.style.maxHeight == "0px"){
    MenuItems.style.maxHeight = "200px";
} else{
    MenuItems.style.maxHeight = "0px";
}
}


    let popup = document.getElementById("popup");
function openpop() {
   popup.classList.add("open-pop") 
}
function closepop() {
    popup.classList.remove("open-pop") 
 }

