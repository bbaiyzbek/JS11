const row = document.querySelector('.row');
const select = document.querySelector('#select')
const btnInfo = document.querySelector('#infobtn')

btnInfo.addEventListener('click', (event) => {
    console.log(select.value);
    row.innerHTML = ' '
    handleGetFlags()
})

const handleGetFlags = () => {
    fetch(`https://restcountries.com/v3.1/region/${select.value}`)
        .then(res => res.json())
        .then(data => {
            data.map(country => {
                row.innerHTML += `
                <div class="col-4">
                     <div class="box">
                         <img src=${country.flags.png} alt="">
                         <h3 class="p-1">${country.name.official}</h3>
                         <p>${country.capital}</p> 
                         <p>Population: ${country.population}</p>
                         <p>Area: ${country.area} km2</p>
                         <button class="mapBtn p-1 btn-outline-info bg-light border-light">
                         <a class="text-decoration-none text-dark" href="${country.maps.googleMaps}">Google Map</a>
                         </button>          
                     </div>      
                </div>
                `
            })
        })
}


