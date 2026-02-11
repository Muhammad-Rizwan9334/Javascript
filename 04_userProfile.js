let user = {
    name: "Muhammad Rizwan",
    age: 28,
    skills: ["js", "HTML", "Css"],
    isActive: true
}

// 4.1 
user.skills.push("React")

console.log(user)
//4.2 increasing user age by 2
user.age+=2
console.log(user.skills)
console.log(user.age)
//4.3
let sentence=`${user.name} is now ${user.age} years old and knows ${user.skills.join(", ")}.`
console.log(sentence)
