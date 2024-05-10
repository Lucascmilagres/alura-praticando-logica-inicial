function alterarStatus(id){
    let selectGame = document.getElementById(`game-${id}`);
    let selectImg = selectGame.querySelector('.dashboard__item__img');
    let selectButton = selectGame.querySelector('.dashboard__item__button');
    let selectText = selectGame.querySelector('a');
    if (selectImg.classList.contains('dashboard__item__img--rented')){
        selectImg.classList.remove('dashboard__item__img--rented');
        selectButton.classList.remove('dashboard__item__button--return');
        selectText.innerText = 'Alugar';
        return;
    }
    if (selectImg.classList.contains('dashboard__item__img')){
        selectImg.classList.add('dashboard__item__img--rented');
        selectButton.classList.add('dashboard__item__button--return');
        selectText.innerText = 'Devolver';
        return;
    }
}