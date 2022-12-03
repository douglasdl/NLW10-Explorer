function createGame(player1, goals1, hour, goals2, player2) {
    return `
        <li>
            <img src="./assets/flags/${player1}.svg" alt="Bandeira do ${player1}">
            <span>${goals1}</span>
            <strong>${hour}</strong>
            <span>${goals2}</span>
            <img src="./assets/flags/${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>

            <ul>
                ${games}
            </ul>
        </div>
    `
}


function formatedDate(stringDate) {
    let UTCdate = new Date(stringDate);
    let date = ("0" + UTCdate.getDate()).slice(-2);
    let month = ("0" + (UTCdate.getMonth() + 1)).slice(-2);
    return date + '/' + month;
}

function getWeekDay(stringDate) {
    let UTCdate = new Date(stringDate);
    let day = UTCdate.getDay();
    let weekDays = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return weekDays[day];
}

function getTime(stringDate) {
    let UTCdate = new Date(stringDate);
    let HH = ("0" + UTCdate.getHours()).slice(-2);
    let MM = ("0" + UTCdate.getMinutes()).slice(-2); 
    return HH + ':' + MM;
}

document.querySelector('#cards').innerHTML =

    gamesList.map((game) => {
        return (
            createCard(formatedDate(game.date), getWeekDay(game.date), 
                createGame(game.teams[0], game.score[0], getTime(game.date), game.score[1], game.teams[1]))
            
        )
    })
    
;



/*
document.querySelector('#cards').innerHTML =
    createCard('24/11', 'quinta', 
        createGame('switzerland', '07:00', 'cameroon') +
        createGame('uruguay', '10:00', 'korea') +
        createGame('portugal', '13:00', 'ghana') +
        createGame('brazil', '16:00', 'serbia')
    ) +
    createCard('28/11', 'segunda',
        createGame('brazil', '13:00', 'switzerland')
    ) +
    createCard('02/12', 'sexta',
        createGame('cameroon', '16:00', 'brazil')
    )
;
*/