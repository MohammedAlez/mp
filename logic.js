let openBtn = document.querySelector(".burgerBtn");
let closeBtn = document.querySelector(".closeBtn");
let navMenu = document.querySelector(".menu");
let overlay = document.querySelector(".overlay");
openBtn.addEventListener("click",(e)=>{
    navMenu.classList.add("active");
    overlay.classList.add("active");
})
closeBtn.addEventListener("click",(e)=>{
    navMenu.classList.remove("active");
    overlay.classList.remove("active")
})
overlay.addEventListener("click",(e)=>{
    navMenu.classList.remove("active");
    overlay.classList.remove("active");
})
// animation while scrlling
let revealElements = document.querySelectorAll("[data-reveal]"),
    revealDelayElements = document.querySelectorAll("[data-revealdelay]");
console.log(revealDelayElements);
let revealing = ()=>{
    revealElements.forEach((ele)=>{
        if(ele.getBoundingClientRect().top < window.innerHeight / 1.2){
            ele.classList.add("revealed");
        }
    })
    revealDelayElements.forEach((ele)=>{
        ele.style.transitionDelay = ele.dataset.revealdelay;
    })
}
window.addEventListener("scroll",revealing)
window.addEventListener("load",revealing)
// animation while scrlling
// links 
let links = document.querySelectorAll(".links a");
links.forEach((e)=>{
    e.addEventListener("click",()=>{
        links.forEach((ele)=>{
            ele.classList.remove("active");
        })

        e.classList.add("active");
        navMenu.classList.remove("active");
        overlay.classList.remove("active")
    })
})
