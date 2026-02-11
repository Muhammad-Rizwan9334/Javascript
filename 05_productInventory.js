let inventory={
    laptop:5,
    mobile:10,
    tablet:2
}

let total_Inventory=Object.values(inventory).reduce((sum,qty)=>{
    return sum+qty

},0)
console.log(total_Inventory)
//5.2

let outOfStock=false
for(let item in inventory){
    if(inventory[item]===0){
        outOfStock==true
    }
}
console.log(outOfStock)

for(let item in inventory){
    inventory[item]+=2
}
console.log("UpdatdInventory:",inventory)