class Bet {


    constructor({amount, date, odds, game_id, created_at, team}) {
        this.amount = amount 
        this.date = date 
        this.odds = odds 
        this.game_id = game_id
        this.created_at = created_at
        this.team = team

        this.div = document.createElement('div')

    }



    loadBet() { 
        //clear dom and render betslip
        gameContainer.innerHTML = ''
        betslipContainer.style.display = 'none'
        this.div.id = this.id 
        this.div.innerHTML = `<div>
                                <h2>Amount: ${this.amount}</h2>
                                <h2>Date: ${this.date}</h2>
                                <h2>Odds: ${this.odds}</h2>
                                <h2>Team: ${this.team}</h2>
                                <h4>Placed at: ${this.created_at}</h4>
                                `
                              
       return this.div
    }

    render() {
        let x = document.createElement('h1')
        x.innerText = 'Placed Bet'
        betContainer.append(x)
        betContainer.append(this.loadBet())
    }
    
}

