import "./styles.css";  

document.querySelector(".dropbtn").addEventListener("click", () => {
    document.getElementById("dropdown").classList.toggle("show");
}
);

let currentImage = 0
const images = document.querySelectorAll(".image-container")

const ImageCarousel = () => {
    const prev = document.querySelector(".prev")
    const next = document.querySelector(".next")
    
    ImageCarouselKnobs(images)
    images[currentImage].style.display = "block"
    UpdateKnobs()
    prev.addEventListener("click", PrevSlide)
    next.addEventListener("click", NextSlide)
    
}

const NextSlide = () => {
    currentImage++
    if (currentImage > images.length - 1) {
        currentImage = 0
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none"
    }
    images[currentImage].style.display = "block"
    UpdateKnobs()
}

const PrevSlide = () => {
    currentImage--
    if (currentImage < 0) {
        currentImage = images.length - 1
    }
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none"
    }
    images[currentImage].style.display = "block"
    UpdateKnobs()
}

const ImageCarouselKnobs = (images) => {
    const knobContainer = document.createElement("div")
    knobContainer.classList.add("knob-container")
    document.querySelector(".image-main-container").appendChild(knobContainer)
 
    for (let i = 0; i < images.length; i++) {
        const knob = document.createElement("div")
        knob.classList.add("knob")
        knobContainer.appendChild(knob)
        knob.addEventListener("click", () => {
            currentImage = i
            for (let j = 0; j < images.length; j++) {
                images[j].style.display = "none"
            }
            images[currentImage].style.display = "block"
            UpdateKnobs()
        })
        }
    }

const UpdateKnobs = () => {
    const allKnobs = document.querySelectorAll(".knob")
    for (let i = 0; i < allKnobs.length; i++) {
        if (i === currentImage) {
            allKnobs[i].style.backgroundColor = "#ced4da"
        } else {
            allKnobs[i].style.backgroundColor = "unset"
        }
    }
}
    

ImageCarousel()
setInterval(NextSlide, 5000)