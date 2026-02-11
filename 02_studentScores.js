
let marks=[78,45,89,62,91,54]
let student_Count=0
for(let i=0;i<marks.length;i++){
    if(marks[i]>=60){
        student_Count ++
    }
}
console.log(student_Count)

//2.2
let grades=[]
for(let i=0;i<marks.length;i++){
    if(marks[i]>=80){
        grades.push("A")

    }else if(marks[i]>=70){
        grades.push("B")

        }else if(marks[i]>=60){
        grades.push("C")

    }else{
        grades.push("F")
    }

}
console.log(grades)

let descending=marks.sort(function(a,b){
    return b-a
})
console.log(descending)