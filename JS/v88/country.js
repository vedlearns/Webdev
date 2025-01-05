const countryName = new URLSearchParams(window.location.search).get("name");
const flagImg = document.querySelector(".country-details img");
const countryNameH1 = document.querySelector(".country-details h1");
const nativeName = document.querySelector(".nativeName");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".subRegion");
const capital = document.querySelector(".capital");
const domain = document.querySelector(".domain");
const currencies = document.querySelector(".currencies");
const language = document.querySelector(".language");
const borderPara = document.querySelector(".border-countries");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    console.log(country);
    console.log(country.name.nativeName);
    flagImg.src = country.flags.svg;
    countryNameH1.innerText = country.name.common;
    nativeName.innerHTML = `<b>Native Name: </b>&nbsp;${
      country.name.nativeName
        ? Object.values(country.name.nativeName)[0].common
        : country.name.common
    }`;
    population.innerHTML = `<b>Population: </b>&nbsp;${country.population}`;
    region.innerHTML = `<b>Region: </b>&nbsp;${country.region}`;
    subRegion.innerHTML = `<b>Sub Region: </b>&nbsp;${
      country.subregion ?? country.region
    }`;
    capital.innerHTML = `<b>Capital: </b>&nbsp;${
      country.capital ? country.capital.join(",") : " No Official Capital"
    }`;
    domain.innerHTML = `<b>Top Level Domain: </b>&nbsp;${country.tld.join(
      " , "
    )}`;
    currencies.innerHTML = `<b>Currencies: </b>&nbsp;${
      country.currencies
        ? Object.values(country.currencies)
            .map((currency) => currency.name)
            .join(", ")
        : "no Official Currency"
    }`;
    language.innerHTML = `<b>Languages: </b>&nbsp;${
      country.languages
        ? Object.values(country.languages).join(" , ")
        : "No Official Language"
    }`;
    if (country.borders) {
      country.borders.forEach((border) => {
        console.log(border);
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountryData]) => {
            console.log(borderCountryData);
            const borderCountry = document.createElement("a");
            borderCountry.href = `country.html?name=${borderCountryData.name.common}`;
            borderCountry.innerText = borderCountryData.name.common;
            borderPara.append(borderCountry);
          });
      });
    }
  });

const theme = document.querySelector(".theme");
const para = document.querySelector(".header-content p");
theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  para.classList.toggle("dark-mode")
  if (para.classList.contains("dark-mode")) 
    para.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp;&nbsp;Light Mode`;
  else
    para.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode`;
});
