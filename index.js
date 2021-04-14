// sports objects
const sports = document.getElementById('item')
//container
const n = document.getElementById('item')
// home button
const home = welcome
//test fetch for initial load
fetch('http://localhost:3000/sports').then(r => r.json()).then(appendItems)

function appendItems(x) {
    const sports = x['data'];
    const liElements = sports.map(function(x){
        const li = document.createElement('li')
        li.id = `${x.id}`
        li.innerText = `${x.attributes.title} ${x.attributes.group}`
        li.className = 'wrapper'
        return li
    })
    liElements.forEach(e => {
        n.appendChild(e)
    });
}

//sports fetch
sports.addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(event.target.id)
    
    return fetch(`http://localhost:3000/sports/${event.target.id}/games`).then(r => r.json()).then(appendSports)

    function appendSports(x) {
    n.style.display = 'none'
    const newItem = document.createElement('div')
    newItem.id = 'game'
    const container = document.querySelector("#container")
    container.append(newItem)
    const games = x['data']
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
//home button
home.addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault()
    game.remove()
    n.style.display = 'block'
    
})













