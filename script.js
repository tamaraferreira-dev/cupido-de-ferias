// Lógica do Botão Fujão (Sim)
const btnSim = document.getElementById('btn-sim');
const card = document.querySelector('.card');

btnSim.addEventListener('mouseover', () => {
    // Pega a largura e altura do card para o botão não sair de dentro dele
    const cardWidth = card.clientWidth;
    const cardHeight = card.clientHeight;

    // Gera posições aleatórias descontando o tamanho aproximado do botão
    const randomX = Math.random() * (cardWidth - 100);
    const randomY = Math.random() * (cardHeight - 50);

    // Aplica as novas posições
    btnSim.style.left = `${randomX}px`;
    btnSim.style.top = `${randomY}px`;
});

// Seleciona os novos elementos do bilhete
const modal = document.getElementById('modal-bilhete');
const btnNao = document.getElementById('btn-nao');
const btnFechar = document.getElementById('fechar-bilhete');

// Quando clica em "Não", adiciona a classe "mostrar" para exibir o bilhete
btnNao.addEventListener('click', () => {
    modal.classList.add('mostrar');
});

// Quando clica no "X", remove a classe "mostrar" para esconder o bilhete
btnFechar.addEventListener('click', () => {
    modal.classList.remove('mostrar');
});

modal.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.classList.remove('mostrar');
    }
});

// Gerador de Desculpas Aleatórias
const desculpas = [
    "📌 'O servidor do amor caiu e o TI foi jogar Beach Tennis.'",
    "📌 'A pessoa ideal para você está maratonando série agora e pediu para não incomodar.'",
    "📌 'Fui assistir um jogo da Copa. Vai Brasil!.'",
    "📌 'Errei a flecha, acertou num boleto. Desculpa.'",
    "📌 'Estou focando na minha carreira de cupido influencer no momento.'",
    "📌 'Sua beleza é muita para uma pessoa só dar conta. Espere um pouco.'"
];

const btnDesculpa = document.getElementById('btn-desculpa');
const textoDesculpa = document.getElementById('texto-desculpa');

btnDesculpa.addEventListener('click', () => {
    // Sorteia um índice do array de desculpas
    const indiceAleatorio = Math.floor(Math.random() * desculpas.length);
    textoDesculpa.innerText = desculpas[indiceAleatorio];
});