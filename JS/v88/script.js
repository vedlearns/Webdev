const cardContainer = document.querySelector(".countries-container");
let allCountriesData
 fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data)
    allCountriesData=data
  });
const searchInput=document.querySelector(".search-container input")


const filterByRegion = document.querySelector(".filter");
filterByRegion.addEventListener("change", () => {
if(filterByRegion.value=="No Filter"){
  location.reload();
}
else{
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then((data) => {
      renderCountries(data);
    });
}

});

function renderCountries(data) {
  cardContainer.innerHTML = ``;
  for (let i = 0; i < data.length; i++) {
    const countryCard = document.createElement("a");
    countryCard.href = `country.html?name=${data[i].name.common}`;
    countryCard.classList.add("country-card");
    countryCard.innerHTML = `<img class="flag-img" src="https://flagcdn.com/ch.svg" alt="">
      <div class="card-content">
          <h3 class="Name">Switzerland</h3>
          <p class="Population"><b>Population:&nbsp;</b>81,770,900</p>
          <p class="Region"><b>Region:&nbsp;</b>Europe</p>
          <p class="Capital"><b>Capital:&nbsp;</b>Berlin</p>    
      </div>`;
    countryCard.querySelector(".Name").innerText = data[i].name.common;
    countryCard.querySelector(
      ".Population"
    ).innerHTML = `<b>Population:&nbsp;</b>${data[i].population.toLocaleString(
      "en-IN"
    )}`;
    countryCard.querySelector(
      ".Region"
    ).innerHTML = `<b>Region: &nbsp;</b>${data[i].region}`;
    countryCard.querySelector(".Capital").innerHTML = `<b>Capital: &nbsp;</b>${
      data[i].capital ? data[i].capital.join(",") : " No Official Capital"
    }`;
    countryCard.querySelector(".flag-img").src = `${data[i].flags.svg}`;
    countryCard.querySelector(".flag-img").alt = `${data[i].flags.svg}`;
    cardContainer.append(countryCard);
  }
}

searchInput.addEventListener("input",(e)=>{
const filterCountries=allCountriesData.filter((country)=> country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
renderCountries(filterCountries)
})

const theme = document.querySelector(".theme");
const para = document.querySelector(".header-content p");
theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  para.classList.toggle("dark-mode")
  if (para.classList.contains("dark-mode")){
    para.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode`;
    themeChecker()
  }
  else{
    para.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode`;
    themeChecker()
  }
});


let themeData=localStorage.getItem("themeData")||" ";
if(themeData!=" "){
document.body.classList.add("dark");
para.classList.add("dark-mode");
}
themeChecker()

 function themeChecker(){
  if (para.classList.contains("dark-mode")) {
    para.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode`;
    localStorage.setItem('themeData',"dark-mode")
  }
  else{
    para.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode`;
    localStorage.setItem('themeData'," ")
  }
}