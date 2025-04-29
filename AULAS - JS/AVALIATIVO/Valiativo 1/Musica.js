let Instru = ['Violão', 'Piano', 'Bateria']

let escolha = 0;

if(escolha == 0 ){
    console.log(`${Instru[0]}, Instreumento Disponivel`);
    console.log("Aulas de Terça e Quinta");

}else if(escolha == 1){
    console.log(`${Instru[1]}, Instrumento Indisponivel`);
    console.log("Infelizmente o professor está afastado por Motivos Médicos");
    
}else if(escolha == 2){
    console.log(`${Instru[2]}, Intrumento Disponivel`);
    console.log("Aulas de Segunda e Quarta");
    
}else{
    console.log('Instrumento Indisponivel');
    console.log("Talvez em um futuro Proximo podemos adicionar este Instrumento 😁");
    
}