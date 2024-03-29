'use strict'
function employee(employeeID, Name, Department, Level, Image, Salary){
    this.employeeID = employeeID;
    this.Name = Name;
    this.Department = Department;
    this.Level = Level;
    this.Image = Image;
    this.Salary = Salary;
    this.netSalary = 0;
}
employee.prototype.calculateSalary = function(){   //like switch
    const employeeSalary ={  //object
        "Senior": {
           min : 1500,
            max : 2000, 
        },
        "Mid-Senior": {
                min : 1000,
                max : 1500,
    } ,
    "Junior": {
                    min : 500,
                   max : 1000,
    }
}
const rangeSalary = employeeSalary[this.Level] //to access of element
 this.Salary = Math.floor(Math.random()*(rangeSalary.max - rangeSalary.min + 1)) +rangeSalary.min; //mimax and moremin

}
employee.prototype.net = function(){
    let tax = 7.5;
    this.netSalary = Math.floor(this.Salary - ((this.Salary*tax)/100))
}

const employees = [
    new employee(1000, "GhaziSamer", "Administration", "Senior", "pexels-photo-3779427.webp" ),
    new employee(1001, "LanaAli", "Finance", "Senior", "pexels-photo-3779427.webp" ),
    new employee(1002, "TamerAyoub", "Marketing", "Senior", "pexels-photo-3779427.webp"),
    new employee(1003, "SafiWalid", "Administration", "Mid-Senior", "pexels-photo-3779427.webp"),
    new employee(1004, "OmarZaid", "Developer", "Senior", "pexels-photo-3779427.webp"),
    new employee(1005, "RanaSaleh", "Developer", "Junior", "pexels-photo-3779427.webp"),
    new employee(1006, "HadiAhmad", "Finance", "Mid-Senior", "pexels-photo-3779427.webp"),
]
 

employee.prototype.render = function(){
    let main = document.querySelector(".main") //catch element in html here
let div = document.createElement("div") //to make new table
main.appendChild(div)
div.className = "emptable"
    let employeename = document.createElement("p") //to create div
    employeename.textContent = "name: " + this.Name; //to contain content
    let employeeSalary = document.createElement("p") 
    employeeSalary.textContent = "salary: " + this.Salary;
    div.appendChild(employeename); //to create child to main 
    div.appendChild(employeeSalary); //to create child to main
}
employees.forEach(Emp =>{ //to see all line 35 together
    Emp.calculateSalary()
    Emp.net()
    Emp.render()
  console.log(Emp);
})
