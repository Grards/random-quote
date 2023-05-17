export function apiAccess(){
    fetch("https://thatsthespir.it/api")
        .then((response) => response.text())
        .then((text) => {
            let quote = JSON.parse(text)
            console.log(quote)
        })
        .catch((error) => {
            console.log("Terre was an error!", error)
        })
}