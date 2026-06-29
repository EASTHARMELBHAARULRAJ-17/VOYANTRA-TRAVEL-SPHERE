const searchBtn=document.querySelector('#search-btn');
const searchBar=document.querySelector('.search-bar-container');
const formBtn=document.querySelector('#login-btn');
const loginForm=document.querySelector('.login-form-container');
const formClose=document.querySelector('#form-close');
const menu=document.querySelector('#menu-bar');
const navBar=document.querySelector('.main-navbar');
const videoBtn=document.querySelectorAll('.vid-btn');
const detailsTab=null;
const destinationTab=null;

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const activeBtn=document.querySelector('.controls .active');
        if(activeBtn){
            activeBtn.classList.remove('active');
        }
        btn.classList.add('active');
        const src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
const pages = {
    "japan": "japan.html",
    "france": "france.html",
    "italy": "italy.html",
    "bhutan": "bhutan.html",
    "brazil": "brazil.html",
    "greece": "greece.html",
    "kerala": "kerala.html",
    "ooty": "ooty.html",
    "kodaikanal": "kodaikanal.html",
    "madurai": "madurai.html",
    "kanyakumari": "kanyakumari.html",
    "rajasthan": "rajasthan.html",
    "new zealand": "newzealand.html",
    "himachal pradesh": "himachal.html",
    "thanjavur": "thanjavur.html",
    "uttar pradesh": "uttarpradesh.html"
};

document.getElementById("search-icon").addEventListener("click", function () {

    let destination = document.getElementById("search-bar").value.trim().toLowerCase();

    if (pages[destination]) {
        window.location.href = pages[destination];
    } else {
        alert("Destination not found!");
    }
});

document.getElementById("search-bar").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("search-icon").click();
    }
});

var swiper=new Swiper(".reviews-slider",{
    loop:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});
var swiper=new Swiper(".reviews-slider" ,{
    loop:true,
    spaceBetween: 20,
    autoHeight:true,
    grabCursor:true,
    breakpoints:{
        640: {
            slidesPerView:1,
        },
        768: {
            slidesPerView:2,
        },
        1024: {
            slidesPerView:3,
        },
    },
});

function goToDestination(event){
    event.preventDefault();

    let destination =
    document.getElementById("destination").value;

    if(destination === "Bh"){
        window.location.href = "Bhutan.html";
    }

    else if(destination === "Br"){
        window.location.href = "Brazil.html";
    }

    else if(destination === "F"){
        window.location.href = "France.html";
    }

    else if(destination === "G"){
        window.location.href = "Greece.html";
    }

    else if(destination === "I"){
        window.location.href = "Italy.html";
    }

    else if(destination === "J"){
        window.location.href = "Japan.html";
    }

    else if(destination === "NZ"){
        window.location.href = "NZ.html";
    }

    else if(destination === "HP"){
        window.location.href = "HP.html";
    }
    else if(destination === "K"){
        window.location.href = "Kerala.html";
    }
    else if(destination === "R"){
        window.location.href = "Rajasthan.html";
    }
    else if(destination === "UP"){
        window.location.href = "UP.html";
    }
    else if(destination === "KK"){
        window.location.href = "KK.html";
    }
    else if(destination === "Ko"){
        window.location.href = "Kodai.html";
    }
    else if(destination === "M"){
        window.location.href = "Madurai.html";
    }
    else if(destination === "O"){
        window.location.href = "Ooty.html";
    }
    else if(destination === "T"){
        window.location.href = "Thanjavur.html";
    }
}

function OpenPopUp(id){
    document.getElementById(id).style.display="block";
    document.getElementById("overlay").style.display="block";
}

function ClosePopUp(id){
    document.getElementById(id).style.display="none";
    document.getElementById("overlay").style.display="none";
}

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".content h1",{
    ...scrollRevealOption
});

ScrollReveal().reveal(".content h3",{
    ...scrollRevealOption,
    delay: 400,
});

ScrollReveal().reveal(".content p",{
    ...scrollRevealOption,
    delay: 800,
});
    /*ScrollReveal().reveal(".btn",{
        ...scrollRevealOption,
        delay: 1200,
    });
*/
ScrollReveal().reveal(".controls",{
    ...scrollRevealOption,
    delay: 1600,
});

ScrollReveal().reveal(".destination_card",{
    ...scrollRevealOption,
    interval: 500,
});
