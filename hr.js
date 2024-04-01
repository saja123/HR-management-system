'use strict'
const employees = [];
console.log(employees)
let form = document.getElementById('emp'); // get element by id
form.addEventListener('submit', getValue); // to listen event from user



function Employee(employeeID, Name, Department, Level, Image, Salary) {
    this.employeeID = employeeID;
    this.Name = Name;
    this.Department = Department;
    this.Level = Level;
    this.Image = Image;
    this.Salary = Salary;
    this.netSalary = 0;
    employees.push(this);    //to add in the array beacuse it reverse to all

}
Employee.prototype.calculateSalary = function () {   //like switch
    const employeeSalary = {  //object
        "Senior": {
            min: 1500,
            max: 2000,
        },
        "Mid-Senior": {
            min: 1000,
            max: 1500,
        },
        "Junior": {
            min: 500,
            max: 1000,
        }
    }
    const rangeSalary = employeeSalary[this.Level] //to access of element
    this.Salary = Math.floor(Math.random() * (rangeSalary.max - rangeSalary.min + 1)) + rangeSalary.min; //mimax and moremin

}
Employee.prototype.net = function () {
    let tax = 0.075;
    this.netSalary = this.Salary - this.Salary * tax;
}


new Employee(1000, "GhaziSamer", "Administration", "Senior", "pexels-photo-3779427.webp");
new Employee(1001, "LanaAli", "Finance", "Senior", "pexels-photo-3779427.webp");
new Employee(1002, "TamerAyoub", "Marketing", "Senior", "pexels-photo-3779427.webp");
new Employee(1003, "SafiWalid", "Administration", "Mid-Senior", "pexels-photo-3779427.webp");
new Employee(1004, "OmarZaid", "Developer", "Senior", "pexels-photo-3779427.webp");
new Employee(1005, "RanaSaleh", "Developer", "Junior", "pexels-photo-3779427.webp");
new Employee(1006, "HadiAhmad", "Finance", "Mid-Senior", "pexels-photo-3779427.webp");

Employee.prototype.render = function () {
    let main = document.getElementById('sectionCard') //catch element in html here
    let divEl = document.createElement("div"); //to make new table
    divEl.classList.add('card'); //to create class name to make style
    main.appendChild(divEl);
    //why we make this elemnt? where we put this elemnt? and what contain this element?//

    // 1. create the element:
    let image = document.createElement("img") //create image
    //2. give it a value:
    image.src = this.Image; //to catch from user
    // 3. append the element to the main
    divEl.appendChild(image);

    let title = document.createElement("h3") //information with images for employee
    title.textContent = `Name: ${this.Name} - ID: ${this.employeeID}`;  //this like line 68
    // title.textContent = 'Name: ' + this.Name + " - ID: " + this.employeeID
    divEl.appendChild(title);

    let body = document.createElement("h4")
    body.textContent = `Department: ${this.Department} - Level: ${this.Level}`;
    divEl.append(body);
     let footer = document.createElement("h5")
     footer.textContent = `Salary: ${this.Salary}`;
     divEl.append(footer);


    // div.className = "emptable"
    // let employeename = document.createElement("p") //to create div
    // employeename.textContent = "name: " + this.Name; //to contain content
    // let employeeSalary = document.createElement("p")
    // employeeSalary.textContent = "salary: " + this.Salary;
    // div.appendChild(employeename); //to create child to main 
    // div.appendChild(employeeSalary); //to create child to main
}
employees.forEach(Emp => { //to see all line 35 together
    Emp.calculateSalary()
    Emp.net()
    Emp.render()
})

Employee.prototype.uniqueID = function () {
    const min = 1000;
    const max = 3000;
    let Id;
    Id = Math.floor(Math.random() * (max - min + 1)) + min;
    return this.uniqueId = Id;
}

function getValue(event) { //lisining to html
    event.preventDefault(); //don't make refresh
    let employeeName = event.target.fullName.value; //get value
    //how to add this value to constructer
    let department = event.target.Department.value;
    let Level = event.target.level.value;
    let image = event.target.imageUrl.value;
    let id = Employee.prototype.uniqueID();
    let addEmployee = new Employee(id, employeeName, department, Level, image);  //like new
    addEmployee.calculateSalary();
    addEmployee.net();
    addEmployee.render();
}




