function active() {
    const input = document.querySelector('#input');
    const conteudo = input.value;
    const conteudo_trim = conteudo.trim(); // corrigido

    const resultado = conteudo_trim.replace(/\s/g, "-"); // corrigido

    document.querySelector('#result').value = resultado;
}