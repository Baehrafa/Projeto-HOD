const botoesCarrosel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagen")
const informacoes = document.querySelectorAll(".informacoes")
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desativarBotaoSelecionado();
        ativarBotaoSelecionado(botao);
        desativarImagemSelecionada();
        mostrarImagemSelecionada(indice);
        desativarInformacoesAtivas();
        mostrarInformacoes(indice);

    });
});
function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemSelecionada(indice) {
    imagens[indice].classList.add("ativa");
}

function ativarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function desativarInformacoesAtivas() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function desativarImagemSelecionada() {
    const imagenAtiva = document.querySelector(".ativa");
    imagenAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

