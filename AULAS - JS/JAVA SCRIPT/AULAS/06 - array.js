// Encrementando Arrays //
// .Lenght = Descobrir quantos itens tem na Variavel //
// [] e um numero dentro indentifica o valor da Posição //

/* Variavel.push(Item) - ele adiciona um novo valor 
a sua Variavel Existente 

Variavel.pop(Item) - ele remove um valor final da sua Variavel

Variavel.splice(Item) - Ele remove qual item vc quiser, passando o caminho da 
vriavel e a quantidade de itens que ela vai apagar 

*/

let Times = ['PSG','Barcelona','Santos','TIMÃO','Bambi','Manchester Unit', 'Ibis','City','Ceara','Bahia']
//console.log(Times[1]);
//console.log(Times.length);



Times[4] = "Sao paulo"
//console.log(Times);

Times.push('Fortaleza',' Vila Nova');
console.log(Times);


Times.splice(4, 1); // O primeiro argumento é o índice e o segundo é a quantidade de itens a remover

console.log(Times);

//delete Times[3];
//console.log(Times);




//console.log(`Meu TIME Preferido é o, ${Times[10]}`);


