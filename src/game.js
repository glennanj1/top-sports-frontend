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
        let o = this.odds.split()
        this.div.innerHTML = `<li>
                                ${this.sites}
                                ${this.odds[0]}
                                ${this.odds[1]}
                              </li>`
        debugger
        return div
    }

    render() {
        Game.gameContainer.append(this.loadGames())
        this.event()
    }

    event() {
        this.div.addEventListener('click', (e) => {
            console.log(e.currentTarget.id)
            gameContainer.innerHTML = ''
            this.loadOdds()
        })
    }

}