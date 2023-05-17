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
            console.log("Error for accessing the quote API", error)
        })
}

export function apiAgify(name){
    let newName = ""
    for(let i = 0; i <= name.length; i++){
        if(name.charAt(i) == " " || name.charAt(i) == "'"){
            break;
        }else{
            newName += name.charAt(i)
        }
    }
    
    const fetchName = (newName) => fetch("https://api.agify.io/?name=" + newName)
    fetchName(newName)
        .then((response) => response.json())
        .then((json) =>{
            return json.age
        })
        .catch((error) =>{
            console.log("Error for loading the age of the author", error)
        })
}

function displayLoading(){
    let loader = document.getElementById("loader")
    loader.classList.add("display-inline-block")
}

function hideLoading(){
    let loader = document.getElementById("loader")
    loader.classList.remove("display-inline-block")
}