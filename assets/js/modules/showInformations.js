import { apiAgify } from "./api-access.js"

const character = document.getElementById("character")
export const quote = document.getElementById("quote")

export async function showInformations(informations){
    if(informations.photo == ""){
        informations.photo="https://m.media-amazon.com/images/I/61xNq7dsmlL._AC_UF894,1000_QL80_.jpg"
    }
    character.style.backgroundImage = `url(${informations.photo})`
    let authorAge = await apiAgify(informations.author)

    quote.innerHTML = `
        <figure>
            <blockquote cite="${informations.permalink}">
                <q>${informations.quote}</q>
            </blockquote>
            <figcaption>${informations.author} : ${authorAge} years old</figcaption>
        </figure>
    `
}