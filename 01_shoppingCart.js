let arr=[499,1299,299,799,249]
let total=0
for(let i=0;i<arr.length;i++){
    total=total+arr[i]
}
console.log(total)

let highestPrice=arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i]>highestPrice){
        highestPrice=arr[i]
    }
}
console.log(highestPrice)
let item=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]<300){
        item.push(arr[i])
    }
}
console.log(item)

let discountedPrice=arr.map((price)=>{
    return price*0.90

})
console.log(discountedPrice)