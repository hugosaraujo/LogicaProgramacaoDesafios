function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('p').textContent;
    
    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        alert(`${nomeJogo} foi devolvido com sucesso!`);
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }

    jogosAlugados();
}

function jogosAlugados(){
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    let palavraJogosAlugados = jogosAlugados == 1 ? 'jogo alugado' : 'jogos alugados';

    console.log(`Você está com ${jogosAlugados} ${palavraJogosAlugados}.`);
}