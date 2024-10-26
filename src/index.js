import "./styles.css";  

document.querySelector(".dropbtn").addEventListener("click", () => {
    document.getElementById("dropdown").classList.toggle("show");
}
);


const ImageCarousel = () => {
    const images = document.querySelectorAll(".image-container")
    const prev = document.querySelector(".prev")
    const next = document.querySelector(".next")
    let currentImage = 0
    images[currentImage].style.display = "block"
    prev.addEventListener("click", () => {
        currentImage--
        if (currentImage < 0) {
            currentImage = images.length - 1
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none"
        }
        images[currentImage].style.display = "block"
        
    })
    next.addEventListener("click", () => {
        currentImage++
        if (currentImage > images.length - 1) {
            currentImage = 0
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none"
        }
        images[currentImage].style.display = "block"
    })
}

ImageCarousel()