class Game {

    static games = []
    static gameContainer = document.getElementById('gameContainer')


    constructor({id, sport_nice, teams, home_team, commence_time, sites, sport_id}) {
        this.id = id
        this.sport_nice = sport_nice 
        this.teams = teams 
        this.home_team = home_team 
        this.commence_time = commence_time
        this.sites = sites
        this.sport_id = sport_id 
        this.div = document.createElement('div')
        
        Game.games.push(this)
    }


}