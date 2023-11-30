import { soma } from "./math/soma.js";
import { subtracao } from "./math/subtracao.js";
import { multiplicacao } from "./math/multiplicacao.js";
import { divisao } from "./math/divisao.js";
import { potencia } from "./math/potencia.js";
import { raizQuadrada } from "./math/raiz-quadrada.js";
import { media } from "./math/media.js";
import { fatorial } from "./math/fatorial.js";
import { porcentagem } from "./math/porcentagem.js";

export class App {
    static initialize(document) {
        const btnCalcular  = document.getElementbyId("btn-calcular");
        const num1 = document.getElementbyId("num1");
        const num2 = document.getElementbyId("num2");

        const resultadoSoma = document.getElementbyId("resultado-soma");
        const resultadoSomaInstead = document.getElementbyId("resultado-soma-instead");

        const resultadoSubtracao = document.getElementbyId("resultado-subtracao");
        const resultadoSubtracaoInstead = document.getElementbyId("resultado-subtracao-instead");

        const resultadoMultiplicacao = document.getElementbyId("resultado-multiplicacao");
        const resultadoMultiplicacaoInstead = document.getElementbyId("resultado-multiplicacao-instead");

        const resultadoDivisao = document.getElementbyId("resultado-divisao");
        const resultadoDivisaoInstead = document.getElementbyId("resultado-divisao-instead");

        const resultadoRaizQuadrada = document.getElementbyId("resultado-raiz-quadrada");
        const resultadoRaizQuadradaInstead = document.getElementbyId("resultado-raiz-quadrada-instead");
        
        const resultadoPotencia = document.getElementbyId("resultado-potencia");
        const resultadoPotenciaInstead = document.getElementbyId("resultado-potencia-instead");
        
        const resultadoPorcentagem = document.getElementbyId("resultado-porcentagem");
        const resultadoPorcentagemInstead = document.getElementbyId("resultado-porcentagem-instead");

        const resultadoFatorial = document.getElementbyId("resultado-fatorial");
        const resultadoFatorialInstead = document.getElementbyId("resultado-fatorial-instead");
        
        const resultadoMedia = document.getElementbyId("resultado-media");
        const resultadoMediaInstead = document.getElementbyId("resultado-media-instead");
        
        
    }
}
