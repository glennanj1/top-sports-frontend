// sports container
const sports = document.getElementById('container')
// home button
const home = welcome
//odds objects
const odds = []
//bets 
const sites = []
//sports fetch on initial load
fetch('http://localhost:3000/sports').then(r => r.json()).then(appendItems)

function appendItems(x) {
    const s = x['data'];
    
    const divElements = s.map(function(x){
        const div = document.createElement('div')
        div.id = `${x.id}`
        div.innerText = `${x.attributes.title}`
        return div
    })
    divElements.forEach(e => {
        sports.appendChild(e)
    });
}

//games fetch
sports.addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(event.target.id)
    
    return fetch(`http://localhost:3000/sports/${event.target.id}/games`).then(r => r.json()).then(appendSports)

    function appendSports(x) {
    sports.style.display = 'none'
    const newItem = document.createElement('div')
    newItem.id = 'game'
    const container = document.querySelector("#gameContainer")
    container.append(newItem)
    const games = x['data']
    debugger;
    const liElements = games.map(function(x){
        const li = document.createElement('li')
        li.id = `${x.id}`
        li.innerText = `${x.attributes.teams} ${x.attributes['sport_nice']}`
        li.className = 'wrapper'
        return li
    })
    liElements.forEach(e => {
        newItem.appendChild(e)
    });

    

    }
})

//odd fetch
gameContainer.addEventListener('click', (event) => {
    console.log(event.target.id)

    return fetch(`http://localhost:3000/sports/${event.target.id}/games`).then(r => r.json()).then(appendSports)

    function appendSports(x) {
    game.remove()
    const newItem = document.createElement('div')
    newItem.id = 'odds'
    const container = document.querySelector("#oddsContainer")
    container.append(newItem)
    const games = x['data']
    debugger;
    const liElements = games.map(function(x){
        const li = document.createElement('li')
        li.id = `${x.id}`
        li.innerText = `${x.attributes.teams} ${x.attributes['sport_nice']}`
        li.className = 'wrapper'
        return li
    });
    liElements.forEach(e => {
        newItem.appendChild(e)
    });
    }
})


//home button
home.addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault()
    game.remove()
    sports.style.display = 'block'
    
})

//sidebar
const form = document.querySelector("body > div.sidebar > form")