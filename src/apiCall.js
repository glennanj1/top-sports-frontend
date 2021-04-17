class ApiCall {

    constructor(url) {
        this.sportUrl = `${url}/sports`
    
    }

    fetchSports() {
        fetch(this.sportUrl).then(response => response.json()).then(data => {
            data['data'].forEach(e => {
                const sport = new Sport({id: e.id, ...e.attributes})
                sport.render()
              
            })
        })
    }
} 