const listaPalavras = [
    {
        palavra: "width",
        significado: "description 1",
    },
    {
        palavra: "height",
        significado: "description 2",
    },
    {
        palavra: "title",
        significado: "description 3",
    },
    {
        palavra: "get",
        significado: "description 4",
    }
]

let newcard = function(word, text) {

    let titleElement = document.querySelector("[data-title]");
    let textElement = document.querySelector("[data-text-card]");
    
    titleElement.innerText = word
    textElement.innerText = text
}

newcard(listaPalavras[0].palavra, listaPalavras[0].significado)



