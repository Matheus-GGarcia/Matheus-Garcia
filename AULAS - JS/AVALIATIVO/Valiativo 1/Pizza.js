let pizza = "1";

switch (pizza) {
    case "Calabreza":
        console.log(`${pizza}: Esta Pizza Custa 38 R$` );   
        break;
    case "Mussarela":
        console.log(`${pizza}: Esta Pizza Custa 28 R$` );   
        break;
    case "Catupiry":
        console.log(`${pizza}: Esta Pizza Custa 45 R$` );   
        break;

    default:
        console.log("Sabor de Pizza não cadastrado no sistema");
        console.log("Escolha um sabor disponivel em Nosso Catálogo ");
               
        break;
}