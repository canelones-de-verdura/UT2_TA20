const image = document.getElementsByTagName("img");

// Cuando el mouse pasa por arriba
image[0].addEventListener("mouseover", () => {
    image[0].src = "pac2.webp"
})

// Cuando se va
image[0].addEventListener("mouseleave", () => {
    image[0].src = "pac1.webp"
})