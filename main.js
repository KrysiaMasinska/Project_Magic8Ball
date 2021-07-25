const ball = document.querySelector('.ball');
const message = document.querySelector('.message');
const imgBall = document.querySelector('img');

const answers = ['To pewne',
    'Bez wątpienia',
    'Zdecydowanie tak',
    'Możesz na nim polegać',
    'Tak jak ja to widzę, tak',
    'Najprawdopodobniej',
    'Dobre perspektywy',
    'Tak',
    'Znaki wskazują na tak',
    'Odpowiedz niewyraźna, spróbuj ponownie',
    'Zapytaj ponownie później',
    'Lepiej nie mówić ci teraz',
    'Nie można teraz przewidzieć',
    'Skoncentruj się i zapytaj ponownie',
    'Nie licz na to',
    'Moja odpowiedź brzmi nie',
    'Moje źródła mówią nie',
    'Nie jesteś taka/i dobry',
    'Bardzo wątpliwe'
];

const getMessage = () => {
    let item = answers[Math.floor(Math.random() * answers.length)];
    message.innerHTML = "\""+item+"\"";
}


ball.addEventListener('click', function () {
    if(!ball.classList.contains('shakeBall')){
        ball.classList.add('shakeBall');  
        setTimeout(function(){getMessage()}, 1000);
    }
 
    setTimeout(function() {ball.classList.remove('shakeBall')}, 1000);
})