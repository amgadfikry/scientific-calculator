//drop menu setting and scientific
const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");

document.addEventListener("click", (event)=>{
    if(!menu.contains(event.target)){
        menuList.classList.remove("active-menu")
    }
    else{
        menuList.classList.toggle("active-menu")
    }
});