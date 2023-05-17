const character = document.getElementById("character")
const quote = document.getElementById("quote")

export function showInformations(informations){
    console.log(informations)
    character.style.backgroundImage = `url(${informations.photo})`
    quote.innerHTML = `
        <figure>
            <blockquote cite="https://thatsthespir.it/of/tim-berners-lee/this-is-for-everyone">
                <q>${informations.quote}</q>
            </blockquote>
            <figcaption>${informations.author}</figcaption>
        </figure>
    `
}