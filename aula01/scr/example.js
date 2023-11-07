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
    
</script>