//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nomeAmigo = input.value.trim();

    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo);
        input.value = '';

        atualizarListaAmigos();
    } else {
        alert("Nome inválido ou já adicionado.");
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    const amigosSorteados = [...amigos];
    const resultados = [];

    
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]];
    }

    for (let i = 0; i < amigos.length; i++) {
        const sorteado = amigosSorteados[i];
        const amigo = amigos[i];
        resultados.push(`${amigo} sorteou ${sorteado}`);
    }

    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = '';

    resultados.forEach(resultado => {
        const item = document.createElement("li");
        item.textContent = resultado;
        listaResultado.appendChild(item);
    });
}

