//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo"); // Obtém o valor do input
    const nomeAmigo = input.value.trim(); // Remove espaços em branco extras

    // Verifica se o nome não está vazio e não foi adicionado antes
    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo); // Adiciona o amigo ao array
        input.value = ''; // Limpa o campo de entrada

        // Atualiza a lista de amigos na tela
        atualizarListaAmigos();
    } else {
        alert("Nome inválido ou já adicionado."); // Alerta caso o nome esteja vazio ou já na lista
    }
}

// Função para atualizar a lista de amigos exibida
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos"); // Obtém a referência à lista
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

    // Adiciona cada amigo à lista HTML
    amigos.forEach(amigo => {
        const item = document.createElement("li"); // Cria um novo item de lista
        item.textContent = amigo; // Define o texto do item como o nome do amigo
        listaAmigos.appendChild(item); // Adiciona o item à lista
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para realizar o sorteio.");
        return;
    }

    const amigosSorteados = [...amigos]; // Faz uma cópia do array de amigos
    const resultados = []; // Array para armazenar os resultados do sorteio

    // Embaralha os amigos (Fisher-Yates Shuffle)
    for (let i = amigosSorteados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosSorteados[i], amigosSorteados[j]] = [amigosSorteados[j], amigosSorteados[i]]; // Troca de posição
    }

    // Cria os pares de amigo secreto
    for (let i = 0; i < amigos.length; i++) {
        const sorteado = amigosSorteados[i];
        const amigo = amigos[i];
        resultados.push(`${amigo} sorteou ${sorteado}`);
    }

    // Exibe os resultados na tela
    mostrarResultados(resultados);
}

// Função para exibir os resultados do sorteio
function mostrarResultados(resultados) {
    const listaResultado = document.getElementById("resultado"); // Obtém a referência à lista de resultados
    listaResultado.innerHTML = ''; // Limpa os resultados anteriores

    resultados.forEach(resultado => {
        const item = document.createElement("li"); // Cria um novo item de lista
        item.textContent = resultado; // Define o texto do item como o resultado
        listaResultado.appendChild(item); // Adiciona o item à lista
    });
}

