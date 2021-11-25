//CREATE ELEMENTS
const body = document.getElementById('#body')
const contain = document.getElementById('container')
const linkGame = document.getElementById('linkGame')
const imgGame = document.getElementById('imgGame')
const nameH1 = document.getElementById('nameH1')
const description = document.getElementById('description')
const PREVIUS = document.getElementById('PREVIUS')
const NEXT = document.getElementById('NEXT')



const fetchGames = () => {
    const getGameUrl = id => `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`

    const gamesPromises = []

    for (let i = 1; i <= 10; i++) {

        gamesPromises.push(fetch(getGameUrl(i), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "5a711bdffbmsh6a9d71687481dc7p17aa32jsn2396622d048e"
            }
        }).then(response => response.json()))
    }
    Promise.all(gamesPromises).then(games => {
        var gamesALL = games
        console.log(gamesALL)
    })


}


fetchGames()

//Variable contabiliza o id do game
var conta = 1

const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${conta}`


fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": "5a711bdffbmsh6a9d71687481dc7p17aa32jsn2396622d048e"
        }
    }).then(r => r.json())
    .then(response => {
        let game = response.thumbnail
        nameH1.innerText = response.title
        linkGame.innerText = 'Download: ' + response.title
        linkGame.href = response.game_url
        description.innerText = response.description
        imgGame.src = game

    })
    .catch(err => {
        console.error(err);
    })

NEXT.addEventListener('click', function buscarGame() {
    conta++

    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${conta}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "5a711bdffbmsh6a9d71687481dc7p17aa32jsn2396622d048e"
            }
        }).then(r => r.json())
        .then(response => {
            let game = response.thumbnail
            nameH1.innerText = response.title
            linkGame.innerText = 'Download: ' + response.title
            linkGame.href = response.game_url
            description.innerText = response.description
            imgGame.src = game

        })
        .catch(err => {
            console.error(err)
        })
})
PREVIUS.addEventListener('click', function buscarGame() {
    if (conta >= 2) {
        conta--
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${conta}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                    "x-rapidapi-key": "5a711bdffbmsh6a9d71687481dc7p17aa32jsn2396622d048e"
                }
            }).then(r => r.json())
            .then(response => {
                let game = response.thumbnail
                nameH1.innerText = response.title
                linkGame.innerText = 'Download: ' + response.title
                linkGame.href = response.game_url
                description.innerText = response.description
                imgGame.src = game


            })
            .catch(err => {
                console.error(err)
            })

    }
})