
const cardContainer = document.querySelector(".countries-container");
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.innerHTML =  `<img class="flag-img" src="https://flagcdn.com/ch.svg" alt="">
    <div class="card-content">
        <h3 class="Name">Switzerland</h3>
        <p class="Population"><b>Population:&nbsp;</b>81,770,900</p>
        <p class="Region"><b>Region:&nbsp;</b>Europe</p>
        <p class="Capital"><b>Capital:&nbsp;</b>Berlin</p>    
    </div>`;
    countryCard.querySelector(".Name").innerText=data[i].name.common
    countryCard.querySelector(".Population").innerHTML=`<b>Population:&nbsp;</b>${data[i].population.toLocaleString('en-IN')}`
    countryCard.querySelector(".Region").innerHTML=`<b>Region: &nbsp;</b>${data[i].region}`
    countryCard.querySelector(".Capital").innerHTML=`<b>Capital: &nbsp;</b>${data[i].capital}`
    countryCard.querySelector(".flag-img").src=`${data[i].flags.svg}`
    cardContainer.append(countryCard) 
    }

  });

  fetch("https://restcountries.com/v3.1/name/switzerland")
  .then(res=>res.json())
  .then(data=>console.log(data[0].name))