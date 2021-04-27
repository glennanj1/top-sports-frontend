class Bet {

    static bets = []
    
    constructor({amount, date, odds, game_id, created_at, team}) {
        this.amount = amount 
        this.date = date 
        this.odds = odds 
        this.game_id = game_id
        this.created_at = created_at
        this.team = team

        this.div = document.createElement('div')

        Bet.bets.push(this)

    }



    loadBet() { 
        //clear dom and render betslip
        gameContainer.innerHTML = ''
        betslipContainer.style.display = 'none'
        this.div.id = this.game_id
        
        this.div.innerHTML = `<div>
                                <h1>Game Id: ${this.game_id}</h1>
                                <h2>Amount: ${this.amount}</h2>
                                <h2>Date: ${this.date}</h2>
                                <h2>Odds: ${this.odds}</h2>
                                <h2>Team: ${this.team}</h2>
                                <h4>Placed at: ${this.created_at}</h4>
                              </div>
                                `
                              
       return this.div
    }

    render() {
        let x = document.createElement('h1')
        betContainer.append(x)
        betContainer.append(this.loadBet())
    }

    
    
}

