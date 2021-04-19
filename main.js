const listaPalavras = [
    {
        palavra: "width",
        significado: "asdfasd",
        traducao: "largura"
    },
    {
        palavra: "height",
        significado: "Felipe",
        traducao: "altura"
    },
    {
        palavra: "title",
        significado: "Ellen",
        traducao: "titulo"
    },
    {
        palavra: "get",
        significado: "qwetrtuty",
        traducao: "pegar"
    }
]

let newcard = function(t, subtitulo, text) {

    let titulo = document.querySelector("[data-title]");
    let b = document.querySelector("[data-subtitle]");
    let textElement = document.querySelector("[data-text-card]");
    
    titulo.innerText = t
    b.innerText = subtitulo
    textElement.innerText = text
}

newcard(listaPalavras[0].palavra, listaPalavras[0].traducao, listaPalavras[0].significado)