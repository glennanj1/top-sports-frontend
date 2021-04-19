const url = 'http://localhost:3000'
const apiCall = new ApiCall(url)
// home button
const home = welcome
const allbets = document.getElementById('bets')

//home button
home.addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault()
    Game.gameContainer.innerHTML = ''
    Game.gameContainer.style.width = '100%'
    oddsContainer.innerHTML = ''
    betslipContainer.style.display = 'none'
    betContainer.innerHTML = ''
    apiCall.fetchSports()
})
//all bets button
allbets.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    container.innerHTML = ''
    oddsContainer.innerHTML = ''
    gameContainer.innerHTML = ''
    betContainer.innerHTML = ''
    apiCall.fetchAllBets()
})

//bet submit handler
const betSubmit = (e) => { 
    e.preventDefault(),

    apiCall.fetchBets()
}
//betslip event
betslip.addEventListener('submit', betSubmit)

//sportsfetch on dom load
apiCall.fetchSports()