//alert('Olá mundo');
alert('Boas-vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
    console.log('Isso ai! Você descobriu o número secreto (' + numeroSecreto +')');
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(')
}