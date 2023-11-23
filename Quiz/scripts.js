// Questões
const question = [
    {
        question: "Qual estrutura de programação foi criada para tratamento de erros?",
        choices: ["for", "do while", "try catch", "switch case"],
        answer: "try catch",
    },
    {
        question: "Qual a forma correta de declarar uma variável em JavaScript",
        choices: ["variable x;", "var x;", "let x;", "const x;"],
        answer: "let x;",
    },
    {
        question: "Como se chama a principal estrutura de repetição do JavaScript?",
        choices: ["for", "if", "else", "switch case"],
        answer: "for",
    },
    {
        question: "O que é DOM em JavaScript?",
        choices: ["DocumentObjectModel", "DocumentOrderModel", "DynamicObjectMarkup", "DataObjectMethod"],
        answer: "DocumentObjectModel",
    },
    {
        question: "Qual método é utilizado para adicionar um ouvinte de eventos a um elemento HTML em JavaScript?",
        choices: ["addEvent", "attachEvent", "addEventListener", "eventListener"],
        answer: "addEventListener",
    },
    {
        question: "Como se chama a estrutura de controle de fluxo que executa um bloco de código se uma condição for verdadeira e outro se for falsa?",
        choices: ["if else", "for", "switch case", "while"],
        answer: "if else",
    }
];

const questionElement = document.getElementById("question");
const choiseElements = Array.from(document.getElementsByClassName("choice"));
const nextButton = document.getElementById("next");
const scoreElement = document.getElementById("score");
const errorElement = document.getElementById("error");

// Variáveis Globais
let currentQuestion = 0;
let acceptingAnswers = false;
let score = 0;
let error = 0;
let answnerChosen = false;

// Funções 
