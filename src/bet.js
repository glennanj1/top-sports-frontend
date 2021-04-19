class Bet {
    constructor({amount, date, odds, game_id}) {
        this.amount = amount 
        this.date = date 
        this.odds = odds 
        this.game_id = game_id

        this.div = document.createElement('div')
    }

    loadBet() { 
        //clear dom and render betslip
        gameContainer.innerHTML = ''
        betslipContainer.style.display = 'none'
        this.div.id = this.id 
        this.div.innerHTML = `<h1>Bet Placed</h1>
                              <li>Amount:${this.amount}</li>
                              <li>Date:${this.date}</li>
                              <li>Odds:${this.odds}</li>`
       return this.div
    }

    render() {
        betContainer.append(this.loadBet())
    }
    
}

