const daysEl = document.querySelector("#days")
const hoursEl = document.querySelector("#hours")
const minutsEl = document.querySelector("#minuts")
const seconsEl = document.querySelector("#secons")


const newYear="01 jan 2023"
function countdown()
{
    const actualDate = new Date()
    const newYearDate= new Date( newYear)
const base=Math.floor((actualDate-newYearDate)/1000)
const day=Math.floor(base /3600/ 24)
const hours=Math.floor((base/3600) % 24)
const minuts=Math.floor((base/60)%60)
const secons=Math.floor(base%60)
console.log(day,hours,minuts,secons);


daysEl.innerHTML=day
hoursEl.innerHTML=hours
minutsEl.innerHTML=minuts
seconsEl.innerHTML=minuts



}


setInterval(countdown,1000)
countdown()


