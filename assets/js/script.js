const inputVerMais = document.querySelector('#verMais');
const inputVerAntes = document.querySelector('#verAntes');
const sectionTecnology = document.querySelector('.tecnologias');
const sectionTecnology2 = document.querySelector('.tecnologias2');
const frontInput = document.querySelector('.frontInput');
const backInput = document.querySelector('.backInput');
const gameInput = document.querySelector('.gameInput');
const cardFuerza = document.querySelector('.cardFuerza');
const cardBmi = document.querySelector('.cardBMI');
const cardBookV = document.querySelector('.cardBookV');
const cardTech = document.querySelector('.cardTech');
const cardJokenpo = document.querySelector('.cardJokenpo');
const cardQuizz = document.querySelector('.cardQuizz');
const buttonContact = document.querySelector('.button-contact');

buttonContact.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
});

frontInput.addEventListener('click', (event) => {
    event.preventDefault();
    frontInput.style.display = 'none';
    gameInput.style.display = 'block';
    backInput.style.display = 'block';
    cardBmi.style.display = 'block';
    cardFuerza.style.display = 'block';
    cardBookV.style.display = 'none';
    cardTech.style.display = 'none';
    cardQuizz.style.display = 'none';
    cardJokenpo.style.display = 'none';

});

backInput.addEventListener('click', (event) => {
    event.preventDefault();
    backInput.style.display = 'none';
    gameInput.style.display = 'block';
    frontInput.style.display = 'block';
    cardBookV.style.display = 'block';
    cardTech.style.display = 'block';
    cardBmi.style.display = 'none';
    cardFuerza.style.display = 'none';
    cardQuizz.style.display = 'none';
    cardJokenpo.style.display = 'none';

});

gameInput.addEventListener('click', (event) => {
    event.preventDefault();
    gameInput.style.display = 'none';
    backInput.style.display = 'block';
    frontInput.style.display = 'block';
    cardBookV.style.display = 'none';
    cardTech.style.display = 'none';
    cardBmi.style.display = 'none';
    cardFuerza.style.display = 'none';
    cardQuizz.style.display = 'block';
    cardJokenpo.style.display = 'block';

});



function screenDisplay() {
    inputVerMais.addEventListener('click', (e) => {
        e.preventDefault();
    
        sectionTecnology.style.display = 'none';
        sectionTecnology2.style.display = 'block';
    });
    
    inputVerAntes.addEventListener('click', (e) => {
        e.preventDefault();
    
        sectionTecnology2.style.display = 'none';
        sectionTecnology.style.display = 'block';
    });

}

screenDisplay();
