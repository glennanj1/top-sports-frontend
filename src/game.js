class Game {

    static games = []
    static gameContainer = document.getElementById('gameContainer')


    constructor({id, sport_nice, teams, home_team, commence_time, sites, odds, odds1, sport_id}) {
        this.id = id
        this.sport_nice = sport_nice 
        this.teams = teams 
        this.home_team = home_team 
        this.commence_time = commence_time
        this.sites = sites
        this.sport_id = sport_id 
        this.odds = odds
        this.odds1 = odds1
        this.div = document.createElement('div')
        
        Game.games.push(this)
    }

    loadGames() {
        this.div.id = this.id
        this.div.innerHTML = `<li>
                                ${this.teams}
                                ${this.commence_time}
                              </li>`
        return this.div
    }

    loadOdds() {
        
        this.div.id = this.id 
        this.div.innerHTML = `<div>
                                <h1>${this.sites}</h1><br>
                                <h2>${this.teams}</h2>
                                <li id='odd1'>${this.odds}</li><br>
                                <li id='odd2'>${this.odds1}</li><br>
                              </div>`
        Game.gameContainer.append(this.div)
    }

    render() {
        Game.gameContainer.append(this.loadGames())
        this.sportEvent()
    }

    sportEvent() {
        this.div.addEventListener('click', (e) => {
            debugger;
            if (e.target.id == 'odd1' || e.target.id == 'odd2') {
                debugger
                alert('You Selected Odds')
            } else {
            console.log(e.target)
            gameContainer.innerHTML = ''    
            this.loadOdds()
            }
            
        })
        
    }

}