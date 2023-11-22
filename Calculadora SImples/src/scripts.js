// Seleção dos elementos

const display = document.querySelector('#displayInput');
const btnIgual = document.querySelector('.igual');
const btnPonto = document.querySelector('.ponto');
const botoesNumeros = document.querySelectorAll('.num');
const btnOp = document.querySelectorAll('.operador');

// Variáveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funções
const atualizaDisplay = () => {
    display.value = operacaoAtual;
};
const insereNumero = (evento) => {
    if (calculando) {
        operacaoAtual = evento.target.textContent;
        calculando = false;
    } else {
       operacaoAtual += evento.target.textContent;
    }
    atualizaDisplay();
};

// EventListeners
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));