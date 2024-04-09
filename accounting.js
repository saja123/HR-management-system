'use strict';

let arrData = localStorage.getItem('AllEmployees');
let data = JSON.parse(arrData);
let employees = data;

function render() {
    if (employees == null) {
        employees = [];
    }

    let tableEl = document.getElementById('tableID');

    let thEl = document.createElement('tr');
    tableEl.appendChild(thEl);

    let tdEl1 = document.createElement('th');
    tdEl1.textContent = "Department Name";
    thEl.appendChild(tdEl1);

    let tdEl2 = document.createElement('th');
    tdEl2.textContent = "Number of employees";
    thEl.appendChild(tdEl2);

    let tdEl3 = document.createElement('th');
    tdEl3.textContent = "Average Salary";
    thEl.appendChild(tdEl3);

    let tdEl4 = document.createElement('th');
    tdEl4.textContent = "Total salary";
    thEl.appendChild(tdEl4);


    let departments = ["Administration", "Marketing", "Development", "Finance"];

    for (let i = 0; i < departments.length; i++) {
        let trEl1 = document.createElement('tr');
        tableEl.appendChild(trEl1);

        let tdEl1 = document.createElement('td');
        tdEl1.textContent = departments[i];
        trEl1.appendChild(tdEl1);


        let tdEl2 = document.createElement('td');
        tdEl2.textContent = numberOfEmployees(departments[i]);
        trEl1.appendChild(tdEl2);

        let tdEl3 = document.createElement('td');
        tdEl3.textContent = culAvgSalary(departments[i]);
        trEl1.appendChild(tdEl3);

        let tdEl4 = document.createElement('td');
        tdEl4.textContent = total(departments[i]);
        trEl1.appendChild(tdEl4);
    }

    let footerR1 = document.createElement('tr');

    let td1 = document.createElement('td');

    footerR1.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = "Total number of employees";
    footerR1.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = "Average salary for all departments";
    footerR1.appendChild(td3);

    let td4 = document.createElement('td');
    td4.textContent = "Total salary for all departments";
    footerR1.appendChild(td4);

    tableEl.appendChild(footerR1);
    footerR1.classList = 'footerRow';

    let footerRow = document.createElement('tr');

    let t1 = document.createElement('td');

    footerRow.appendChild(t1);

    let totalEmployees = document.createElement('td');
    totalEmployees.textContent = employees.length;
    footerRow.appendChild(totalEmployees);

    let avgSalary = document.createElement('td');
    avgSalary.textContent = avgOfEmployee();
    footerRow.appendChild(avgSalary);

    let totalSalary = document.createElement('td');
    totalSalary.textContent = totalOfDepartment();
    footerRow.appendChild(totalSalary);

    tableEl.appendChild(footerRow);
}

function total(department) {
    let departmentTotalSalary = {
        "Administration": 0,
        "Marketing": 0,
        "Development": 0,
        "Finance": 0
    };

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].Department === department) {
            departmentTotalSalary[department] += employees[i].Salary;
        }
    }
    return Math.floor(departmentTotalSalary[department]);
}

function numberOfEmployees(department) {
    let count = 0;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].Department === department) {
            count++;
        }
    }

    return count;
}

function culAvgSalary(department) {
    let totalSalary = 0;
    let count = 0;

    for (let i = 0; i < employees.length; i++) {
        if (employees[i].Department === department) {
            totalSalary += employees[i].Salary;
            count++;
        }
    }
    let avgSalary = totalSalary / count;
    if (isNaN(avgSalary)) {
        return 0;
    } else
        return Math.floor(avgSalary);
}

function avgOfEmployee() {
    let totalSalary = 0;

    for (let i = 0; i < employees.length; i++) {
        totalSalary += employees[i].Salary;
    }
    let avgSalary = totalSalary / employees.length;
    return Math.floor(avgSalary);
}

function totalOfDepartment() {
    let totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        totalSalary += employees[i].Salary;
    }
    return Math.floor(totalSalary);
}

render();
