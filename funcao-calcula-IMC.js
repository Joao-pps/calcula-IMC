/* 
Função calcula imc
====Requisitos===
 1-IMC = peso/alutura².
 2-Deve retornar um unico numero.
 3-Deve gerar um erro se receber um parametro não numero.
 4-Deve retornar erro caso não reba nenhum parametro dentre os dois.
*/
function calculaImc(peso, altura) {
    console.log(peso)
    console.log(altura)
    if (peso === undefined || altura === undefined) {
        throw Error("Não aceitamos espaço em branco.")
    } else if(isNaN(peso) || isNaN(altura)) {
        throw Error("digite apenas numeros")
    } else {
        let imc = peso / (altura ** 2);
        return imc;
    }
}
let imc = calculaImc(90, 1.80)
console.log(imc);


/* 
Construir uma função para classificar IMC
====Requisitos====
1-Deve receber um número(o IMC)
2-Deve retornar uma string
3-Deve gerar erro se receber um parãmetro não numero
4-Deve retornar erro caso receba nenhum parametro
*/

function classificacaoImc(imc) {
    if(imc < 16.9) {
        console.log("Muito abaixo do peso");
    } else if(imc < 18.4) {
        console.log("Abaixo do peso")
    } else if(imc < 24.9) {
        console.log("Peso normal")
    } else if(imc < 29.9) {
        console.log("Acima do peso")
    } else if(imc < 34.9) {
        console.log("Obesidade Grau 1")
    } else if(imc < 40) {
        console.log("Obesidade Grau 2")
    } else if(imc > 40) {
        console.log("Obesidade Grau 3")
    } else {
        console.error("Error, muito pesado")
    }
}

let resultadoImc = classificacaoImc(imc);


