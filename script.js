const images = [
    "images/person/person-0.png",
    "images/person/person-2.png",
    "images/person/person-3.png",
    "images/person/person-4.png",
    "images/person/person-5.png"
]
let imgIndex = 0
const imgElement = document.getElementById('slider-Img')
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0
    }

    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl)
    imgIndex++
}, 1000)