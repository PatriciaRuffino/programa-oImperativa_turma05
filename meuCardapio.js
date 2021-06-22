
//chamar a função entrada dentro do objeto informando o nome do restaurante e cardápio



function Restaurante (nomeDoRestaurante, cardapio){
    this.nomeDoRestaurante=nomeDoRestaurante;
    this.cardapio=cardapio.join()
    entrada=()=>"Seja bem vindo(a) ao"
};



/* function entrada(){
    return "Seja bem vindo(a) ao"
} */
let rest = new Restaurante ("Coma Bem!", ["Cachorro-Quente","Hamburger","Milk-shake","Sorvete"])
 console.log(entrada(),rest);
    

   

  
    


