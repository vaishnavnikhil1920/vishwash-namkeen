// ==========================
// VISHWASH NAMKEEN
// PREMIUM SCRIPT
// ==========================

// Sticky Navbar Shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });
});

// Product Card Animation
const cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px) scale(1)";

    });

});

// Button Click Animation
const buttons=document.querySelectorAll(".btn1,.btn2,.order-btn,.product-btn,.contact-btn");

buttons.forEach(btn=>{

btn.addEventListener("click",function(){

this.style.transform="scale(.95)";

setTimeout(()=>{

this.style.transform="scale(1)";

},150);

});

});

// Loading Animation
window.onload=function(){

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="1s";

document.body.style.opacity="1";

},100);

};
