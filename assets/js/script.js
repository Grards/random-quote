import { apiAccess } from "./modules/api-access.js";

const newQuote = document.getElementById("new-quote")

apiAccess()

newQuote.addEventListener("click", apiAccess)