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
        this.div.innerHTML = `<li>
                                ${this.title}
                                ${this.group}
                                ${this.details}
                                ${this.active}
                              </li>`
        return this.div
    }

    render() {
        Sport.container.append(this.loadSports())
        this.event()
    }

    event(){
        this.div.addEventListener('click', (e) => {
            console.log(e.currentTarget.id)  
            //remove sports
            container.remove()
            //append games function?
            let id = e.currentTarget.id
            const gameCall = new ApiCall(url, id)
            gameCall.fetchGames()
        })
    }
}