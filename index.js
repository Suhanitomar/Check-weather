var input=document.querySelector("#input")
var search=document.querySelector("#search")
function hide(){
    document.querySelector("#field").style.display="none"
    document.querySelector("#cards").style.display="flex"
    document.querySelector("#place").innerHTML=input.value
}
function show(){
    document.querySelector("#field").style.display="flex"
    document.querySelector("#cards").style.display="none"
}
var description=document.querySelector("#description")
var humidity=document.querySelector("#humidity")
var place=document.querySelector("#place")
async function weather(city){
    const key="51629fea50b3b0ed1153de044d2e3e1b"
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=51629fea50b3b0ed1153de044d2e3e1b`
    const data= await fetch(api).then(response=>response.json())
    if(data.cod=="400"){
        console.log("error")
        return
    }
    place.innerHTML=city
    description.innerHTML=data.weather[0].description
    humidity.innerHTML=data.main.humidity+"%"
}
search.addEventListener("click",()=>{
    weather(input.value)
})
search.addEventListener("click",()=>{
    console.log(input.value)
})