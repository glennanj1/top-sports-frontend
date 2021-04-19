const url = 'http://localhost:3000'
const apiCall = new ApiCall(url)
// home button
const home = welcome

//home button
home.addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault()
    gameContainer.innerHTML = ''
    Game.gameContainer.style.width = '100%'
    oddsContainer.innerHTML = ''
    betslipContainer.style.display = 'none'
    apiCall.fetchSports()
    
})

//sportsfetch on dom load
apiCall.fetchSports()