const q = `80ed4aeb79fc4da34f339927f512e8f5`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${q}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

}

const displayTemperature = (data) => {

    console.log(data.name);
    console.log(data);

    setInnerTextById('temperature',data.main.temp);
    setInnerTextById('city', data.name);
    setInnerTextById('condition',data.weather[0].main);

    document.getElementById('search-field').value='';

}

const setInnerTextById=(id,text)=>{
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}


document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    loadTemperature(city);
})

const input = document.getElementById("search-field");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn-search").click();
  }
});

loadTemperature()

