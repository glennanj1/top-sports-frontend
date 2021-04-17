const url = 'http://localhost:3000'
const apiCall = new ApiCall(url)
// home button
const home = welcome
//sports fetch on initial load






// //odd fetch
// gameContainer.addEventListener('click', (event) => {
//     console.log(event.target.id)
//     return fetch(`http://localhost:3000/games/${event.target.id}`).then(r => r.json()).then(appendSports)

//     function appendSports(x) {
    
//     game.remove()
//     const newItem = document.createElement('div')
//     newItem.id = 'odds'
//     const container = document.querySelector("#oddsContainer")
//     container.append(newItem)
//     const odds = x['data']
//     for (const odd of odds.attributes.sites) {
//         console.log(odd.site_nice);
//         console.log(`${odd.odds['h2h'][0]}  ${odd.odds['h2h'][1]}`);
//         const div = document.createElement('div')
//         const o = document.createElement('li')
        
//         div.id = odd.site_key
//         div.innerText = `${odd.site_nice}: ${odd.odds['h2h'][0]}  ${odd.odds['h2h'][1]}`
//         newItem.appendChild(div)
//         return div
//     }
//     }
// })

// //odds page event to trigger betslip
// oddsContainer.addEventListener('click', (event) => {
//     console.log(event.target)
// } )

//home button
home.addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault()
    gameContainer.innerHTML = ''
    oddsContainer.innerHTML = ''
    apiCall.fetchSports()
    
})

// //sidebar
// const form = document.querySelector("body > div.sidebar > form")

apiCall.fetchSports()