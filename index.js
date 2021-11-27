//CREATE ELEMENTS
let body = document.getElementById('#body')
let contain = document.getElementById('container')
let linkGame = document.getElementById('linkGame')
let imgGame = document.getElementById('imgGame')
let nameH1 = document.getElementById('nameH1')
let description = document.getElementById('description')
let PREVIUS = document.getElementById('PREVIUS')
let NEXT = document.getElementById('NEXT')
let gamesALL
let gamesALL2
let gamesALLFinal



const fetchGames = () => {
    const getGameUrl = id => `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`

    const gamesPromises = []

    for (let i = 1; i <= 50; i++) {
        gamesPromises.push(fetch(getGameUrl(i), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "5a711bdffbmsh6a9d71687481dc7p17aa32jsn2396622d048e"
            }
        }).then(response => response.json()))
    }
    Promise.all(gamesPromises).then(games => {
        gamesALL = games
        gamesALL.splice(26, 1)
        gamesALL.splice(32, 1)
        gamesALL.splice(35, 1)
        gamesALL.splice(36, 2)
        gamesALL.splice(40, 1)
        gamesALL.splice(43, 1)

        nameH1.innerText = gamesALL[0].title
        linkGame.innerText = 'Download: ' + gamesALL[0].title
        linkGame.href = gamesALL[0].game_url
        description.innerText = gamesALL[0].description
        imgGame.src = gamesALL[0].thumbnail
        fetchGames2()


    })


}
fetchGames()


const fetchGames2 = () => {
    const getGameUrl2 = id => `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`

    const gamesPromises = []

    for (let i = 50; i <= 100; i++) {
        gamesPromises.push(fetch(getGameUrl2(i), {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "5a711bdffbmsh6a9d71687481dc7p17aa32jsn2396622d048e"
            }
        }).then(response => response.json()))
    }
    Promise.all(gamesPromises).then(games => {
        gamesALL2 = games
        gamesALL2.splice(23, 4)
        gamesALL2.splice(24, 4)
        gamesALL2.splice(26, 1)
        gamesALL2.splice(27, 1)
        gamesALL2.splice(30, 1)
        gamesALL2.splice(35, 1)
        gamesALL2.splice(36, 1)
        gamesALL2.splice(0, 1)
        gamesALL2.splice(2, 2)

    })
}



//Variable contabiliza o id do game
var conta = 0
NEXT.addEventListener('click', function buscarGame() {

    if (conta <= 76) {
        conta++

        gamesALLFinal = gamesALL.concat(gamesALL2)

        nameH1.innerText = gamesALLFinal[conta].title
        linkGame.innerText = 'Download: ' + gamesALLFinal[conta].title
        linkGame.href = gamesALLFinal[conta].game_url
        description.innerText = gamesALLFinal[conta].description
        imgGame.src = gamesALLFinal[conta].thumbnail
    }
})
PREVIUS.addEventListener('click', function buscarGame() {

    if (conta >= 1) {
        conta--
        gamesALLFinal = gamesALL.concat(gamesALL2)
        nameH1.innerText = gamesALLFinal[conta].title
        linkGame.innerText = 'Download: ' + gamesALLFinal[conta].title
        linkGame.href = gamesALLFinal[conta].game_url
        description.innerText = gamesALLFinal[conta].description
        imgGame.src = gamesALLFinal[conta].thumbnail
    }
})