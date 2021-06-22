let restaurante= {
    nome : "Henrique",
    mesa : "33",
    entrada : ["pão (manteiga, sal e Azeite)", " azeitonas", " salame"],
    

pedido : function() { 
    return "Sejá bem vindo ao nosso restaurante, " +this.nome +"!"+ " O numero de sua mesa é: " +this.mesa+ "!"+"  O que gostariam como entrada? Temos as seguintes opções : " +this.entrada }};

console.log(restaurante.pedido());
