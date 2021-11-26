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
        console.log(gamesALL)

        gamesALL.splice(26, 1)
        gamesALL.splice(32, 1)
        gamesALL.splice(35, 1)
        gamesALL.splice(36, 2)
        gamesALL.splice(40, 1)
        gamesALL.splice(43, 1)


        console.log(gamesALL)
        nameH1.innerText = gamesALL[0].title
        linkGame.innerText = 'Download: ' + gamesALL[0].title
        linkGame.href = gamesALL[0].game_url
        description.innerText = gamesALL[0].description
        imgGame.src = gamesALL[0].thumbnail
    })


}

fetchGames()


const fetchGames2 = () => {
    const getGameUrl2 = id => `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`

    const gamesPromises = []

    for (let i = 51; i <= 10; i++) {

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
        console.log(gamesALL)

    })


}

fetchGames2()








//Variable contabiliza o id do game
var conta = 0









NEXT.addEventListener('click', function buscarGame() {
    conta++

    let game = gamesALL[conta].thumbnail
    nameH1.innerText = gamesALL[conta].title
    linkGame.innerText = 'Download: ' + gamesALL[conta].title
    linkGame.href = gamesALL[conta].game_url
    description.innerText = gamesALL[conta].description
    imgGame.src = game
    console.log(conta)

})

PREVIUS.addEventListener('click', function buscarGame() {
    if (conta >= 1) {
        conta--
        let game = gamesALL[conta].thumbnail
        nameH1.innerText = gamesALL[conta].title
        linkGame.innerText = 'Download: ' + gamesALL[conta].title
        linkGame.href = gamesALL[conta].game_url
        description.innerText = gamesALL[conta].description
        imgGame.src = game
        console.log(conta)

    }
})