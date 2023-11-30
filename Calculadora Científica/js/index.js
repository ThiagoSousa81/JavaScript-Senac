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

        btnCalcular.addEventListener("click", () => {
            resultadoDivisao.innerHTML = divisao(num1.value, num2.value);
            resultadoDivisaoInstead.innerHTML = divisao(num2.value, num1.value);

            resultadoFatorial.innerHTML = fatorial(num1.value);
            resultadoFatorialInstead.innerHTML = fatorial(num2.value);

            resultadoMedia.innerHTML = media(num1.value, num2.value);
            resultadoMediaInstead.innerHTML = media(num2.value, num1.value);

            resultadoMultiplicacao.innerHTML = multiplicacao(num1.value, num2.value);
            resultadoMultiplicacaoInstead.innerHTML = multiplicacao(num2.value, num1.value);

            resultadoMultiplicacao.innerHTML = multiplicacao(num1.value, num2.value);
            resultadoMultiplicacaoInstead.innerHTML = multiplicacao(num2.value, num1.value);

            resultadoPorcentagem.innerHTML = porcentagem(num1.value, num2.value) + "%";
            resultadoPorcentagemInstead.innerHTML = porcentagem(num2.value, num1.value) + "%";

            resultadoPotencia.innerHTML = potencia(num1.value, num2.value);
            resultadoPotenciaInstead.innerHTML = potencia(num2.value, num1.value);

            resultadoRaizQuadrada.innerHTML = raizQuadrada(num1.value);
            resultadoRaizQuadradaInstead.innerHTML = raizQuadrada(num2.value);

            resultadoSoma.innerHTML = soma(num1.value, num2.value);
            resultadoSomaInstead.innerHTML = soma(num2.value, num1.value);

            resultadoSubtracao.innerHTML = subtracao(num1.value, num2.value);
            resultadoSubtracaoInstead.innerHTML = subtracao(num2.value, num1.value);

        });
        
        
    }
}
