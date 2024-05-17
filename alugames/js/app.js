let jogosAlugados = 0; 

function exibirQuantAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(id){
    let selectGame = document.getElementById(`game-${id}`);
    let selectImg = selectGame.querySelector('.dashboard__item__img');
    let selectButton = selectGame.querySelector('.dashboard__item__button');
    let selectName = selectGame.querySelector('p').innerText;
    if (selectImg.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você realmente deseja devolver o jogo ${selectName}`)){
            selectImg.classList.remove('dashboard__item__img--rented');
            selectButton.classList.remove('dashboard__item__button--return');
            selectButton.innerText = 'Alugar';
            jogosAlugados--;
        }
    }
    else {
            selectImg.classList.add('dashboard__item__img--rented');
            selectButton.classList.add('dashboard__item__button--return');
            selectButton.innerText = 'Devolver';
            jogosAlugados++;
    }
    exibirQuantAlugados();
}

// Inicializa a contagem caso os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    exibirQuantAlugados();
});