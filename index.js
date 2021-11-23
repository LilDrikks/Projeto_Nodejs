//CREATE ELEMENTS
const body = document.getElementById('#body')
const contain = document.getElementById('container')
const button = document.createElement('button')
const button2 = document.createElement('button')
const h1 = document.createElement('h1')
const img = document.createElement('img')
const a = document.createElement('a')
const p = document.createElement('p')

//INSERT ELEMENTS IN #CONTAINER DIV
contain.insertAdjacentElement('beforeend', img)
contain.insertAdjacentElement('afterbegin', a)
contain.insertAdjacentElement('beforeend', h1)
contain.insertAdjacentElement('beforebegin', button2)
contain.insertAdjacentElement('afterend', button)
button.insertAdjacentElement('afterend', p)

//INSERT STYLE AND VALUES IN ELEMENTS
//Element p 
const styleP = `
display:inline-block;
width:90%;
background-color:black;
margin-top:30px;
color:white;
padding:20px;
`
p.style = styleP

//Element a
const styleA = `
font-size:24px;
text-decoration:none;
color:black;
`
a.style = styleA

//Element h1
const styleH1 = `
margin-bottom:40px;
text-align:center;
`
h1.style = styleH1

//Element div #container
const styleCont = `
display: flex;
justify-content: center;
align-items:center;
flex-wrap:wrap;
width:420px;
height:400px;
position: relative;
border-radius:5px;
`
contain.style = styleCont

//Element button
const styleBtn = `
width : 100px;
height: 50px;
position: ;
bottom:0;
margin-bottom:5px;
background-color: #8c8c8c;
`
button.style = styleBtn
button2.style = styleBtn

//Add atributes in buttons
button.innerText = 'NEXT'
button.className = 'btn'
button.id = 'btnNx'
button2.innerText = 'PREVIUS'
button2.className = 'btn'
button2.id = 'btnPv'




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
        console.log(games)
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
        h1.innerText = response.title
        a.innerText = 'Download: ' + response.title
        a.href = response.game_url
        p.innerText = response.description
        img.src = game

    })
    .catch(err => {
        console.error(err);
    })

document.querySelector('#btnNx').addEventListener('click', function buscarGame() {
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
            h1.innerText = response.title
            a.innerText = 'Download: ' + response.title
            a.href = response.game_url
            p.innerText = response.description
            img.src = game

        })
        .catch(err => {
            console.error(err)
        })
})
document.querySelector('#btnPv').addEventListener('click', function buscarGame() {
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
                var game = response.thumbnail
                h1.innerText = response.title
                a.innerText = 'Download: ' + response.title
                a.href = response.game_url
                p.innerText = response.description
                img.src = game


            })
            .catch(err => {
                console.error(err)
            })

    }
})