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
        this.div.innerHTML = `<li>${this.title}</li>`
        return this.div
    }

    render() {
        Sport.container.append(this.loadSports())
    }
}