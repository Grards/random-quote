const character = document.getElementById("character")

export function showInformations(informations){
    console.log(informations)
    character.style.backgroundImage = `url(${informations.photo})`
}