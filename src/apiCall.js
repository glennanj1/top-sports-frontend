class ApiCall {

    constructor(url, id) {
        this.sportUrl = `${url}/sports`
        this.gameUrl = `${url}/sports/${id}/games`
        //show page
        this.betUrl = `${url}/bets`
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

    fetchBets() {
        const slip = {
            amount:  amount.value,
            date: date.value,
            odds: odds.value,
            game_id: game_id.value
       }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            
            body: JSON.stringify(slip)
        
        }

        fetch(this.betUrl, configObj).then(r => r.json()).then(data => {
            
            const bet = new Bet({id: data['data'].id, ...data['data'].attributes})
            debugger;
            bet.render()
            }) 
        }
} 