class Game {

    static games = []
    static gameContainer = document.getElementById('gameContainer')


    constructor({id, sport_nice, teams, home_team, team_1, team_2, commence_time, sites, odds, odds1, sport_id}) {
        this.id = id
        this.sport_nice = sport_nice 
        this.teams = teams 
        this.home_team = home_team 
        this.commence_time = commence_time
        this.sites = sites
        this.sport_id = sport_id 
        this.odds = odds
        this.odds1 = odds1
        this.team_1 = team_1 
        this.team_2 = team_2
        this.div = document.createElement('div')
        
        Game.games.push(this)
    }

    loadGames() {
        this.div.id = this.id
        this.div.innerHTML = `<li>
                                <h3>Matchup: ${this.teams}<h3><br>
                                <h2>Home Team: ${this.home_team}</h2>
                                <h3>Commence Time: <br>${this.commence_time}</h3>
                                <h4>Sport: ${this.sport_nice}
                              </li>`
        return this.div
    }

    loadOdds() {
        
        this.div.id = this.id 
        this.div.innerHTML = `<li>
                                <h2>${this.sites}</h2><br>
                                <h3>${this.teams}</h3>
                                <button id='odd1'>${this.odds}</button><br>
                                <button id='odd2'>${this.odds1}</button><br>
                              </li>`
        Game.gameContainer.append(this.div)
    }

    render() {
        Game.gameContainer.append(this.loadGames())
        this.sportEvent()
    }

    sportEvent() {
        this.div.addEventListener('click', (e) => {
        
            if (e.target.id == 'odd1') {
                betslip.reset()
                Game.gameContainer.style.width = '60%'
                betslipContainer.style.display = 'flex'
                betslip.odds.value = e.target.innerText
                betslip.game_id.value = this.id        
                betslip.team.value = this.team_1
            } else if (e.target.id == 'odd2') {
                //load in bet form and highlight selected odds (e.target.id)
                betslip.reset()
                Game.gameContainer.style.width = '60%'
                betslipContainer.style.display = 'flex'
                betslip.odds.value = e.target.innerText
                betslip.game_id.value = this.id 
                betslip.team.value = this.team_2               
            } else {
            console.log(e.target)
            gameContainer.innerHTML = ''    
            this.loadOdds()
            }
        }) 
    }

}