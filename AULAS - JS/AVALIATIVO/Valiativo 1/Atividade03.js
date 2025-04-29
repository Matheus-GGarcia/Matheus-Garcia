
let nota = 0
let classificacao;


if (nota >= 90 && nota <= 100) {
    classificacao = "A";
} else if (nota >= 80 && nota < 90) {
    classificacao = "B";
} else if (nota >= 70 && nota < 80) {
    classificacao = "C";
} else if (nota >= 60 && nota < 70) {
    classificacao = "D";
} else if (nota < 60) {
    classificacao = "F";
} else {
    classificacao = "Nota inválida"; // Para notas fora do intervalo de 0 a 100
}

// Exibe a classificação no console
console.log("Classificação: " + classificacao);
 

