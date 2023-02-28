function active() {
    const input = document.querySelector('#input');
    const conteudo = input.value;
    const conteudo_trim = conteudo.trim();

    resultado = conteudo_trim.replace(/\s+/g, "-")
                             .replace(/ç/g, "c") 
                             .replace(/â/g, "a") 
                             .replace(/ã/g, "a") 
                             .replace(/â/g, "a")
                             .replace(/á/g, "a")
                             .replace(/à/g, "a")
                             .replace(/ê/g, "e")
                             .replace(/é/g, "e")
                             .replace(/è/g, "e")
                             .replace(/î/g, "i")
                             .replace(/í/g, "i")
                             .replace(/ì/g, "i")
                             .replace(/ô/g, "o")
                             .replace(/ó/g, "o")
                             .replace(/ò/g, "o")
                             .replace(/û/g, "u") 
                             .replace(/ú/g, "u")
                             .replace(/ù/g, "u")
                             .replace(/ý/g, "y");

    document.querySelector('#result').value = resultado.toLowerCase();
}

function copiar() {
    var textoCopiado = document.querySelector("#input");
    const texto = textoCopiado.value;
    texto.toLowerCase();
    navigator.clipboard.writeText(texto)
        .then(() => {
            alert('Texto copiado com sucesso!' + texto);
        })
        .catch((erro) => {
            alert('Erro ao copiar o texto:');
        });
}