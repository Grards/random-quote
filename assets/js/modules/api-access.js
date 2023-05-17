import { quote, showInformations } from "./showInformations.js"

export function apiAccess(){
    quote.innerHTML=""
    displayLoading()
    fetch("https://thatsthespir.it/api")
        .then((response) => {
            if(response.status === 200){
                hideLoading()
            } 
            return response.text()
        })   
        .then((text) => {
            console.log(text.ok)
            let quote = JSON.parse(text)
            showInformations(quote)
            
        })
        .catch((error) => {
            console.log("Error for accessing the quote API", error)
        })
}

export async function apiAgify(name){
    let newName = ""
    for(let i = 0; i <= name.length; i++){
        if(name.charAt(i) == " " || name.charAt(i) == "'"){
            break;
        }else{
            newName += name.charAt(i)
        }
    }
    const fetchName = (newName) => fetch("https://api.agify.io/?name=" + newName)
    return fetchName(newName)
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