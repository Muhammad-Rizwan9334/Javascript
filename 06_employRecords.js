let employee=[
  { name: "Amit", salary: 40000 },
  { name: "Neha", salary: 55000 },
  { name: "Karan", salary: 30000 }
]
 let highestSalary=employee[0]
 for(let emp of employee){
    if(emp.salary>highestSalary.salary){
        highestSalary=emp
    }
 }
 console.log(highestSalary)

 for (let emp of employee){
    if(emp.salary<5000){
        emp.salary*0.10
    }
 }

 console.log("Updated Salary is:",employee)