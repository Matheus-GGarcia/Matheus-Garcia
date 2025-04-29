const n1 = 2
const n2 = 4

function Calculadora(n1, n2, Calcular) {
    switch (Calcular) {
        case "SOMA":
            return n1 + n2
        
        case "SUBTRAÇÃO":
            return n1 - n2

        case "SUBTRAÇÃO":
            return n1 - n2
      
        case "MULTIPLICAÇÃO":
            return n1 * n2
      
        case "DIVISÃO":
            if(n1 && n2){
                return n1 / n2
            }else{
                return "Sua Divisão Foi por 0"
            
            }
      
    
        default:
            return "Operação Inválida"
        
    }
}



        console.log(`A sua Soma foi: ${Calculadora(n1 ,n2, 'SOMA')}`);
        console.log(`A sua Subtração foi: ${Calculadora(n1 ,n2, 'SUBTRAÇÃO')}`);
        console.log(`A sua Multiplicação foi: ${Calculadora(n1 ,n2, 'MULTIPLICAÇÃO')}`);
        console.log(`A sua Divisão foi: ${Calculadora(n1 ,n2, 'DIVISÃO')}`);


