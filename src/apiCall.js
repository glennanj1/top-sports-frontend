class ApiCall {

    constructor(url, id) {
        this.sportUrl = `${url}/sports`
        this.gameUrl = `${url}/sports/${id}/games`
    }

    fetchSports() {
        fetch(this.sportUrl).then(response => response.json()).then(data => {
            data['data'].forEach(e => {
                const sport = new Sport({id: e.id, ...e.attributes})
                sport.render()
              
            })
        })
    }

    fetchGames() {
        fetch(this.gameUrl).then(response => response.json()).then(data => {
            data['data'].forEach(e => {
                const game = new Game({id: e.id, ...e.attributes})
                game.render()
            })
        })       
    }
} 