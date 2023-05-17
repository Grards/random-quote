import { showInformations } from "./showInformations.js"

export function apiAccess(){
    fetch("https://thatsthespir.it/api")
        .then((response) => response.text())
        .then((text) => {
            let quote = JSON.parse(text)
            showInformations(quote)
        })
        .catch((error) => {
            console.log("Terre was an error!", error)
        })
}