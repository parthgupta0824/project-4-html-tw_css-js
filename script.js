

console.log("connected")


let input = document.querySelector('input')
let search = document.querySelector('button')
let result = document.querySelector('.result-container')



let para = document.querySelectorAll('p');
for (let i = 0; i < para.length; i++) {
    para[0].classList.add('overflow-scroll')
}

search.addEventListener('click', (e) => {
    let name = input.value
    if (name.length == 0) {
        alert('Enter the name first then press search')
        return;
    }
    let container = document.querySelector('.poster')
    let moviedata = document.querySelector('.moviedata')


    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }


    while (moviedata.firstChild) {
        moviedata.removeChild(moviedata.firstChild);
    }



    let key = '9eb2727b'
    fetch(`http://www.omdbapi.com/?t=${name}&apikey=${key}`)
        .then((resp) => resp.json())
        .then(data => {

            console.log(data.Response)

            if (data.Response == 'False') {
                alert(`${name} does not exist in the database.`)
                return;
            }

            let poster = data.Poster; console.log(poster)
            let posterimg = document.createElement('img')
            posterimg.src = poster;
            container.append(posterimg)


            let imdbrating = data.imdbRating; console.log(imdbrating)
            let pimdbrating = document.createElement('p')
            pimdbrating.innerHTML = 'IMDB Rating : ' + imdbrating
            moviedata.append(pimdbrating)


            let actors = data.Actors; console.log(actors)
            let pacrot = document.createElement('p')
            pacrot.innerHTML = 'Actors : ' + actors
            pacrot.classList.add('whitespace-nowrap')
            moviedata.append(pacrot)


            let genre = data.Genre; console.log(genre)
            let pgenre = document.createElement('p')
            pgenre.innerHTML = 'Genre : ' + genre
            pgenre.classList.add('whitespace-nowrap')
            moviedata.append(pgenre)


            let release = data.Released; console.log(release)
            let prelease = document.createElement('p')
            prelease.innerHTML = 'Release : ' + release
            prelease.classList.add('whitespace-nowrap')
            moviedata.append(prelease)


            let director = data.Director; console.log(director)
            let pdirector = document.createElement('p')
            pdirector.innerHTML = 'Director : ' + director
            pdirector.classList.add('whitespace-nowrap')
            pdirector.classList.add('whitespace-nowrap')
            moviedata.append(pdirector)



            let length = data.Runtime; console.log(length)
            let plength = document.createElement('p')
            plength.innerHTML = 'Length : ' + length
            plength.classList.add('whitespace-nowrap')
            moviedata.append(plength)



            let writer = data.Writer; console.log(writer)
            let pwriter = document.createElement('p')
            pwriter.innerHTML = 'Writer : ' + writer
            pwriter.classList.add('whitespace-nowrap')
            moviedata.append(pwriter)


            let boxofficcollection = data.BoxOffice; console.log(boxofficcollection)
            let pboxofficcollection = document.createElement('p')
            pboxofficcollection.innerHTML = 'Box office collection : ' + boxofficcollection
            pboxofficcollection.classList.add('whitespace-nowrap')
            moviedata.append(pboxofficcollection)


            let country = data.Country; console.log(country)
            let pcountry = document.createElement('p')
            pcountry.innerHTML = 'Country : ' + country
            pcountry.classList.add('whitespace-nowrap')
            moviedata.append(pcountry)



            let awards = data.Awards; console.log(awards)
            let pawards = document.createElement('p')
            pawards.innerHTML = 'Awards : ' + awards
            pawards.classList.add('whitespace-nowrap')
            moviedata.append(pawards)



            let plot = data.Plot; console.log(plot)
            let pplot = document.createElement('p')
            pplot.innerHTML = 'Plot : ' + plot
            pplot.classList.add('whitespace-nowrap')
            pplot.classList.add('overflow-scroll')
            moviedata.append(pplot)

        })
        .catch(e => {
            console.log(e)
        })






})