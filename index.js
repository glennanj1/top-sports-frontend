// sports objects
const sports = document.getElementById('item')
// odds array 
const odds = [] 
//container
const n = document.getElementById('item')
//test fetch for initial load
fetch('http://localhost:3000/sports').then(r => r.json()).then(appendItems)

function appendItems(x) {
    const sports = x['data'];
    const liElements = sports.map(function(x){
        const li = document.createElement('li')
        li.id = `${x.attributes.key}`
        li.innerText = `${x.attributes.title} ${x.attributes.group}`
        li.className = 'wrapper'
        return li
    })
    liElements.forEach(e => {
        n.appendChild(e)
    });
}


sports.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(event.target.id)
    // fetch(`http://localhost:3000/sports/${event.target.id}`)
})





