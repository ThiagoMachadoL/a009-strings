/* a) */
const frase= "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair";
console.log(frase);

/* b) */
const trocaDeCor = frase.replace("verde", "rosa").replace("azul","laranja");
console.log(trocaDeCor);

/* c) */
console.log(trocaDeCor.includes("verde"));
console.log(trocaDeCor.includes("laranja"));

/* Extra */ 
const frase1 = "Jorge tem uma casa verde e com portão azul, com os dizeres:\"BOAS VINDAS,"
const frase2 = " mas não deixe o gato sair";
console.log(frase1+frase2.toUpperCase()); 

console.log(frase.replace("mas não deixe o gato sair","mas não deixe o gato sair".toUpperCase()))