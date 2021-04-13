// sports array
const sports = []
// odds array 
const odds = [] 
//container
const n = document.getElementById('new')
//test fetch 
fetch('http://localhost:3000/conferences').then(r => r.json()).then(appendItems)

function appendItems(x) {
    const conferences = x['data'];
    const h1Elements = conferences.map(function(x){
        const h1 = document.createElement('h1')
        h1.innerText = `${x.attributes.league}`
        return h1
    })
    const liElements = conferences.map(function(x){
        const li = document.createElement('li')
        li.innerText = `${x.attributes.conference} ${x.attributes.division}`
        li.className = 'wrapper'
        return li
    })
    h1Elements.forEach(e => {
        n.appendChild(e)
    });
    liElements.forEach(e => {
        n.appendChild(e)
    });
}



