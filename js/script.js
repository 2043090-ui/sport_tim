const employes = document.querySelectorAll(".card_employe")
const modal = document.querySelector(".modal")

for (let i = 0; i < employes.length; i++) {
    const employe = employes[i];
    
    employe.addEventListener("click", openModal)
}

function openModal(event){

const imgElement = event.currentTarget.querySelector("img")

const path = imgElement.src

const image = document.createElement("img")

image.src = path

image.classList.add("zoom")

modal.appendChild(image);

modal.classList.add("visible")

image.addEventListener("click", closeModal)
}

function closeModal(event){
    modal.classList.remove("visible")
    modal.removeChild(event.currentTarget)
}