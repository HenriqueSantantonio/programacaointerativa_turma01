let filmes = ["star wars","Clube da Luta","O poderoso chefão ","Top gun","Interestelar"];

let cartoons = ["Toy story","Procurando Nemo","Kung-fu Panda","Wally","Fotnite"];

console.log(filmes[1]);

function juntaArrays() {
    console.log(filmes.push(cartoons[0]));
    console.log(filmes.push(cartoons[1]));
    console.log(filmes.push(cartoons[2]));
    console.log(filmes.push(cartoons[3]));
    console.log(filmes.push(cartoons[4]));
    console.log(filmes.pop());
    console.log(filmes);

    
}

juntaArrays();


