const images = document.querySelectorAll(".gallery img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const close = document.querySelector(".close");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");


let current = 0;



images.forEach((img,index)=>{

    img.onclick = ()=>{

        current = index;

        showImage();

    }

});



function showImage(){

    lightbox.style.display="flex";

    lightboxImg.src = images[current].src;

}



close.onclick = ()=>{

    lightbox.style.display="none";

}



next.onclick = ()=>{

    current++;

    if(current >= images.length){

        current = 0;

    }

    showImage();

}



prev.onclick = ()=>{

    current--;

    if(current < 0){

        current = images.length - 1;

    }

    showImage();

}