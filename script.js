let api_key='7644cbb126688deb2f939923700e846b';
let ciudad ='Londres';
let difKelvin=273.15;
let urlBase= 'https://api.openweathermap.org/data/2.5/weather'


// Eventos
document.querySelector("#botonBusqueda").addEventListener("click",funcionPrueba)
document.querySelector("#ciudadEntrada").addEventListener("keydown",teclado)

function teclado(e){
    let ciudadTecleada = document.querySelector("#ciudadEntrda").value
    (e.key==="Enter" )
}

function funcionPrueba(){
    const ciudad=document.querySelector("#ciudadEntrada").value
    if (ciudad){
        fetchDatosClima(ciudad)
    }

}

function fetchDatosClima(ciudad){
    fetch (`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data =>mostrarDatosClima(data))
}

function mostrarDatosClima(data){
console.log(data)
const divDatosClima=document.querySelector("#datosClima")
divDatosClima.innerHTML=""

const ciudadNombre=data.name
const paisNombre=data.sys.country
const temperatura=data.main.temp
const humedad=data.main.humidity
const descripcion=data.weather[0].description
const icono=data.weather[0].icon

const ciudadTitulo=document.createElement("h2")
ciudadTitulo.textContent=`${ciudadNombre}, ${paisNombre}`

const temperaturaInfo=document.createElement("p")
temperaturaInfo.textContent= `La temperatura es: ${(temperatura-difKelvin).toFixed(1)}ºC`

const humedadInfo=document.createElement("p")
humedadInfo.textContent= `La humedad es: ${humedad}%`

const iconoInfo=document.createElement("img")
iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`

const descripcionInfo=document.createElement("p")
descripcionInfo.textContent=`La descripción meteorologica es: ${descripcion}`

divDatosClima.appendChild(ciudadTitulo)
divDatosClima.appendChild(temperaturaInfo)
divDatosClima.appendChild(humedadInfo)
divDatosClima.appendChild(iconoInfo)
divDatosClima.appendChild(descripcionInfo)

}



