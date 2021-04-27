class Sport {

    static sports = []
    static container = document.getElementById('container')

    constructor({id, key, active, group, details, title}) {
        this.id = id
        this.key = key
        this.active = active 
        this.group = group 
        this.details = details 
        this.title = title 
        this.div = document.createElement('div')

        Sport.sports.push(this)

    }

    loadSports() {
        this.div.id = `${this.id}`
        if (this.active !== false) {
        this.div.innerHTML = `<li>
                                <h2>${this.title}</h2>
                                <h3>Group: ${this.group}</h3>
                                <h3>Details:${this.details}</h3>
                              </li>`
        }
        return this.div
    }

    render() {
        Sport.container.append(this.loadSports())
        this.event()
    }

    event() {
        this.div.addEventListener('click', (e) => {
            console.log(e.currentTarget.id)  
            //remove sports
            container.innerHTML = ''
            //append games function?
            let id = e.currentTarget.id
            const gameCall = new ApiCall(url, id)
            gameCall.fetchGames()
        })
    }
}