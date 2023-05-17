import { showInformations } from "./showInformations.js"

export function apiAccess(){
    displayLoading()
    fetch("https://thatsthespir.it/api")
        .then((response) => response.text())
        .then((text) => {
            let quote = JSON.parse(text)
            hideLoading()
            showInformations(quote)
            
        })
        .catch((error) => {
            console.log("Terre was an error!", error)
        })
}

export function apiAgify(){
    // const fetchName = 
    fetch("https://api.agify.io/?name=")
}

function displayLoading(){
    let loader = document.getElementById("loader")
    loader.classList.add("display-inline-block")
}

function hideLoading(){
    let loader = document.getElementById("loader")
    loader.classList.remove("display-inline-block")
}