// código omi// código omitido
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute

while (chute != numeroSecreto) {
        chute = prompt('Escolha numero de 1 a 10');
        // enquanto chute não for igual ao n.s.
        if (chute == numeroSecreto) { 
                alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
        } else {
        if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
        } else {
                alert(`0 número secreto é maior que ${chute}`);
                }
}
                                }