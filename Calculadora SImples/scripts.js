// Seleção dos elementos

const display = document.querySelector('#displayInput');
const btnIgual = document.querySelector('.igual');
const btnPonto = document.querySelector('.ponto');
const botoesNumeros = document.querySelectorAll('.num');
const btnOp = document.querySelectorAll('.operador');


let divz = false;

// Variáveis globais
let operacaoAtual = "";
let operador = null;
let valorAnterior = "";
let calculando = false;

// Funções
const atualizaDisplay = () => {
    if (!divz) {
        display.value = operacaoAtual;
    } else {
        display.value = "0";
        divz = false;
    }
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

// Inserindo Ponto
const inserePonto = () => {
    if (operacaoAtual.indexOf(".") === -1){
        operacaoAtual += ".";
        atualizaDisplay();
    }
};

// Inserindo operadores
const insereOperador = (evento) => {
    if (operacaoAtual != "" ) {
        if (!calculando) {
            // Operador diferente de null executa calculando()
            if (operador != null) calculando(); 

            valorAnterior = operacaoAtual;
            operacaoAtual = "";
        }
        operador = evento.target.textContent;
        
    }
}
/*
const insereIgual = () => {
    if (operador != null && operacaoAtual != "" && !calculando) {
        calcula();
        operador = null;
    }

    /*if (valorAnterior != "" && calculando) {
        operacaoAtual = eval(valorAnterior + operador + operacaoAtual);
        valorAnterior = "";
        operador = null;
        calculando = false;
        atualizaDisplay();
    }
}*/

// EventListeners
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero));
btnPonto.addEventListener("click", inserePonto);
btnOp.forEach((botao) => botao.addEventListener("click", insereOperador));
btnIgual.addEventListener("click", () => {
    if (operador != null && operacaoAtual != "" && !calculando) {
        calcula();
        operador = null;
    }
});


// Operações
const calcula = () => {
    let resultado = null;    
    const operandoAnterior = parseFloat(valorAnterior);
    const operandoAtual = parseFloat(operacaoAtual);
    switch (operador) {
        case "+":
            resultado = operandoAnterior + operandoAtual;
            break;
        
        case "-":            
            resultado = operandoAnterior - operandoAtual;
            break;

        case "*":
            resultado = operandoAnterior * operandoAtual;
            break;

        case "/":
            if (operandoAtual != 0) {
                resultado = operandoAnterior / operandoAtual;
            }
            else{
                alert("Exception = new Exception();\nNão é possível dividir por 0!");
                divz = true;
            }
            
            break;
    
        default:
            break;
    }
    operacaoAtual = String(resultado);
    valorAnterior = operacaoAtual;
    calculando = true;
    atualizaDisplay();
};