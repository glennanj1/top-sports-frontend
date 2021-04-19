class Bet {
    constructor({amount, date, odds, game_id}) {
        this.amount = amount 
        this.date = date 
        this.odds = odds 
        this.game_id = game_id

        this.div = document.createElement('div')
    }

    render() { alert('render this bet ;)')}
    
}

