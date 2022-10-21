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

//dark mode
const darkBtn = document.querySelector(".dark-mode");
const root = document.querySelector(":root");
let theme = "light";

darkBtn.addEventListener("click",()=>{
    if(theme=="light"){
        root.style.setProperty("--body-white","rgb(40, 40, 40)");
        root.style.setProperty("--screen-gray","rgb(0, 0, 0)");
        root.style.setProperty("--btn-bg-gray","rgb(75, 75, 75)");
        root.style.setProperty("--scientific-btn","rgb(100, 100, 100)");
        root.style.setProperty("--main-btn","rgb(250, 250, 250)");
        root.style.setProperty("--shadow-btn-light-1","rgba(150,150,150,0.15)");
        root.style.setProperty("--shadow-btn-light-2","rgba(150,150,150,0.12)");
        root.style.setProperty("--shadow-main","rgba(250,250,250,0.20)");
        theme = "dark";
    }
    else{
        root.style.setProperty("--body-white","rgb(245, 245, 245)");
        root.style.setProperty("--screen-gray","rgb(230, 230, 230)");
        root.style.setProperty("--btn-bg-gray","rgb(219, 219, 219)");
        root.style.setProperty("--scientific-btn","rgb(150, 150, 150)");
        root.style.setProperty("--main-btn","rgb(56, 56, 56)");
        root.style.setProperty("--shadow-btn-light-1","rgba(255,255,255,0.15)");
        root.style.setProperty("--shadow-btn-light-2","rgba(255,255,255,0.12)");
        root.style.setProperty("--shadow-main","rgba(0,0,0,0.30)");
        theme = "light";
    }
})

//switch between basic and scientific buttons
const switchBtn = document.querySelector(".switch-btn");
const scientificBtn = document.querySelectorAll(".scientific-btn");
const scientificBar = document.querySelectorAll(".scientific-bar")
let switcher = "scientific"

switchBtn.addEventListener("click", ()=>{
    if(switcher=="basic"){
        switchBtn.textContent="Scientific"
        switcher="scientific";
        scientificBtn.forEach(el=>{
            el.classList.remove("scientific-btn-active");
        })
        scientificBar.forEach(el=>{
            el.classList.remove("scientific-bar-active");
        })
    }
    else{
        switchBtn.textContent="Basic"
        switcher="basic";
        scientificBtn.forEach(el=>{
            el.classList.add("scientific-btn-active");
        })
        scientificBar.forEach(el=>{
            el.classList.add("scientific-bar-active");
        })
    }
})

//inv button click
const invBtn = document.querySelector(".inv");
const sinBtn = document.querySelector(".sin");
const cosBtn = document.querySelector(".cos");
const tanBtn = document.querySelector(".tan");
const logBtn = document.querySelector(".log");
const lnBtn = document.querySelector(".ln");
const rootBtn = document.querySelector(".root");
let invStatus = false;

let changeInv = function(text,sup){
    return `<p>${text}<sup>${sup}</sup></p>`
}
invBtn.addEventListener("click",()=>{
    if(invStatus == false){
        sinBtn.innerHTML = changeInv("sin",-1);
        cosBtn.innerHTML = changeInv("cos",-1);
        tanBtn.innerHTML = changeInv("tan",-1);
        logBtn.innerHTML = changeInv(10,"^");
        lnBtn.innerHTML = changeInv("e","x");
        rootBtn.innerHTML = changeInv("x",2);
        invStatus = true;
    }
    else{
        sinBtn.innerHTML = "sin";
        cosBtn.innerHTML = "cos";
        tanBtn.innerHTML = "tan";
        logBtn.innerHTML = "log";
        lnBtn.innerHTML = "ln";
        rootBtn.innerHTML = '<i class="fa-solid fa-square-root-variable"></i>';
        invStatus = false;
    }
})
