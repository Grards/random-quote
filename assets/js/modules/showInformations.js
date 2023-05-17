import { apiAgify } from "./api-access.js"

const character = document.getElementById("character")
const quote = document.getElementById("quote")

export function showInformations(informations){
    if(informations.photo == ""){
        informations.photo="https://m.media-amazon.com/images/I/61xNq7dsmlL._AC_UF894,1000_QL80_.jpg"
    }
    character.style.backgroundImage = `url(${informations.photo})`
    quote.innerHTML = `
        <figure>
            <blockquote cite="https://thatsthespir.it/of/tim-berners-lee/this-is-for-everyone">
                <q>${informations.quote}</q>
            </blockquote>
            <figcaption>${informations.author}</figcaption>
        </figure>
    `

    apiAgify(informations.author)
    // console.log(apiAgify(informations.author))
}