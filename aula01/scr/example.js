<script>
let dois = 2   //int
let nome = "Fulano";    //string
const pi = 3.14; //constante
var binary = true; // boolean
let Objeto = {}; //Objeto
let Array = []; //Array
let nulo = null;    //Constante vazia
let indefinido = undefined;     // Constante indefinida


// Consoles
console.log(dois);
console.log(nome);
console.log(binary)
document.write(typeof Objeto);


//Operadores aritméticos
var x = 10;
var y = 5;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);


// Operadores de comparação
console.log(x == y); // === é para comparar tipos e valores ao msm tempo
console.log(x != y);
console.log(x > y);
console.log(x < y);

// Operadores lógicos
console.log(x != y && x > y); // AND
console.log(x > y || x < y); // OR
console.log(!(x < y)); // NOT

//Conversão de tipos
const meuNumero = "123";
console.log(typeof meuNumero);
const meuNumeroConvertido = parseInt(meuNumero);
console.log(typeof meuNumeroConvertido);
console.log(typeof String(meuNumeroConvertido));

// Condições if, else if, else

const idade = 20

if (idade < 13){
	console.log("Criança");
}
else if (idade < 18) {
	console.log("Adolescente");
}
else 
{
	console.log("Adulto");
}

// Programa para avaliar média de alunos

var nota1 = 7.7;
var nota2 = 8.5;
var nota3 = 3.7;
const notaS = 6.5;

if (nota1 < nota2 && nota1 < nota3 ) {
	nota1 = notaS;
}
else if (nota2 < nota3 && nota2 < nota1 ) {
	nota2 = notaS;
}
else if (nota3 < nota1 && nota3 < nota2 ) {
	nota3 = notaS;
}


var mediaPonderada = ((nota1 * 3) + (nota2 * 3) + (nota3 * 4) + (notaS * 1)) / 3 + 3 + 4 + 1;

if(mediaPonderada > 6){
	console.log("Aluno aprovado!");
}
else{
	console.log("Aluno reprovado");
}
    
</script>