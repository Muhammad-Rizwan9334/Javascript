let arr=[32, 30, 29, 35, 33, 31, 34]
let avgTemperature=arr.reduce((a,b)=>{
    return a+b/arr.length
})

console.log(avgTemperature)

let hotter=arr.filter((temp)=>{
    return temp>avgTemperature

})
console.log("Hotter days:",hotter)

//3.3
let update_temperature=arr.map((temp)=>{
    return temp<30? "cold":temp

})
console.log(update_temperature)