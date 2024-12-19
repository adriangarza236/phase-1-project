//Title 
const title = document.createElement('h1')
document.body.appendChild(title);
title.innerText = 'Click Flick'
title.style.textAlign = 'center'
title.style.fontSize = '60px'

//styling
document.body.style.fontFamily = 'impact'
document.body.style.color
document.body.style.backgroundColor = 'brown'
document.body.style.color = 'yellow'







//label show data 
const handleShows = (show) => {
    //create elements to hold content
    const image= document.createElement('img')
    const name = document.createElement('h2')
    const genres = document.createElement('h4')
    const rating =document.createElement('h4')
    const button = document.createElement('button')
    const summary = document.createElement('p')
    
    //give elements content
    image.src = show.image.medium
    name.textContent = show.name
    genres.textContent = `Genre: ${show.genres}`
    rating.textContent = `Rating: ${show.rating.average}`
    
    //button details
    button.innerText = `Likes: 0`
    let Likes = '1'
    button.style.marginLeft = '10px'
    
    //build show details panel
    let card = document.createElement('div')
    
    //place panel 
    document.body.appendChild(card)
    card.appendChild(image)
    card.appendChild(name)
    name.appendChild(button)
    card.appendChild(genres)
    card.appendChild(rating)
    
    //make button event listener
    button.addEventListener('click', () => {
        button.innerText = `Likes: ${Likes++}`
    
    });

    //make name event listener
    name.addEventListener('dblclick', () => {
        summary.innerText = show.summary
        genres.appendChild(summary)
    })

}



//Get shows using fetch
function getShows() {
    fetch('http://localhost:3000/shows')
    .then(response => response.json())
    .then(shows => {
        shows.forEach(show => handleShows(show));
    })
    }



getShows()