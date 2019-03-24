/* Write your code here */
function Company(company) {
    this._name = company.name;
    this._owner = company.owner;
    this._maxCount = company.maxCompanySize;

    let _employees = [];
    let _stopWorkAtCompany;
    let _startWorkAtCompany;
    let _historyLog = `${this._name} was created in ${new Date()}\n`;

    this.addNewEmployee = function (employee) {
        if (employee instanceof Employee) {
            if (this._name === employee._currentCompanyName) {
                console.log(`${employee._name} is already working at ${employee._currentCompanyName}`);
            } else {
                if (_employees.length >= this._maxCount) {
                    let minSalaryId = 0;
                    for (let i = 1; i < _employees.length; i++) {
                        if (_employees[i]._salary < _employees[minSalaryId]._salary) {
                            minSalaryId = i;
                        }
                    }
                    this.removeEmployee(minSalaryId);
                }
                _startWorkAtCompany = new Date();
                _employees.push(employee);
                employee.hire(this._name, _startWorkAtCompany);
                _historyLog += `${employee._name} starts working at ${this._name} in ${_startWorkAtCompany}.\n`
            }
        } else {
            console.log('Please try to add Employee instance!');
        }
    }

    this.removeEmployee = function (id) {
        if (id >= 0 && id < _employees.length) {
            _stopWorkAtCompany = new Date();
            _employees[id].fire(this._name, _stopWorkAtCompany);
            _historyLog += `${_employees[id]._name} ends working at ${this._name} in ${_stopWorkAtCompany}.\n`;
            _employees.splice(id, 1);
        } else {
            console.log('Incorrect id of employee!')
        }
    }

    this.getAvarageSalary = function () {
        let amountOfSalary = 0;
        for (let i = 0; i < _employees.length; i++) {
            amountOfSalary += _employees[i]._salary;
        }

        return (amountOfSalary / _employees.length).toFixed(2);
    }

    this.getEmployees = function () {
        return _employees;
    }

    this.getFormattedListOfEmployees = function () {
        let listOFEmoloyees = '';
        for (let i = 0; i < _employees.length; i++) {
            listOFEmoloyees += `${_employees[i]._name} - works at ${this._name} ${_employees[i].getWorkTimeInSeconds()} seconds. \n`;
        }
        return listOFEmoloyees;
    }

    this.getAvarageAge = function () {
        let amountOfAge = 0;
        for (let i = 0; i < _employees.length; i++) {
            amountOfAge += _employees[i]._age;
        }

        return (amountOfAge / _employees.length).toFixed(2);
    }

    this.getHistory = function () {
        return _historyLog;
    }
}

function Employee(employee) {

    if (!isNaN(employee.name) || !isNaN(employee.primarySkill)
        || isNaN(employee.age) || employee.age <= 14 || employee.age >= 70
        || isNaN(employee.salary) || employee.salary <= 0) {
        console.log('Can not create instance of Employee!')
        return;
    }

    this._name = employee.name;
    this._primarySkill = employee.primarySkill;
    this._age = employee.age;
    this._salary = employee.salary;
    this._currentCompanyName;

    let _historyLog = '';
    let _hireDate;
    let _fireDate;
    let _totalTime = 0;

    this.getSalary = function () {
        return this._salary;
    }
    this.setSalary = function (newSalary) {
        if (isNaN(newSalary) || !isFinite(newSalary) || typeof newSalary !== 'number') {
            console.log(`Incorrect data!`);
        } else {
            if (this._salary >= newSalary) {
                console.log(`Cannot set smaller salary than employee has now!`);
                _historyLog += `try to change salary from ${this._salary} to ${newSalary}\n`;
            } else {
                _historyLog += `change salary from ${this._salary} to ${newSalary}\n`;
                this._salary = newSalary;
            }
        }
    }

    this.getWorkTimeInSeconds = function () {
        if (this._currentCompanyName === '') {
            return _totalTime.toFixed(2);
        } else if (this._currentCompanyName) {
            return ((new Date() - _hireDate) / 1000).toFixed(2);
        } else {
            return 0;
        }
    }

    this.hire = function (companyName) {
        if (this._currentCompanyName === companyName) {
            console.log(`${this._name} is already working at ${this._currentCompanyName}`)
        } else {
            this._currentCompanyName = companyName;
            _hireDate = new Date();
            _historyLog += `${this._name} is hired to ${this._currentCompanyName} in ${_hireDate}.\n`;
        }
    }

    this.fire = function () {
        _fireDate = new Date();
        _totalTime += (_fireDate - _hireDate) / 1000;
        _historyLog += `${this._name} is fired from ${this._currentCompanyName} in ${_fireDate}.\n`;
        this._currentCompanyName = '';
    }

    this.getHistory = function () {
        return _historyLog;
    }
}

// let artem = new Employee({ name: "Artem", age: 15, salary: 1000, primarySkill: "UX" });
// let vova = new Employee({ name: "Vova", age: 16, salary: 2000, primarySkill: "BE" });
// let vasyl = new Employee({ name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE" });
// let ivan = new Employee({ name: "Ivan", age: 35, salary: 5000, primarySkill: "FE" });
// let orest = new Employee({ name: "Orest", age: 29, salary: 300, primarySkill: "AT" });
// let anton = new Employee({ name: "Anton", age: 19, salary: 500, primarySkill: "Manager" });

// let epam = new Company({ name: "Epam", owner: "Arkadii", maxCompanySize: 5 });
// epam.addNewEmployee(artem);
// epam.addNewEmployee(vova);
// epam.addNewEmployee(vasyl);
// epam.addNewEmployee(ivan);
// epam.addNewEmployee(orest);
// epam.addNewEmployee(anton);

// console.log(epam.getHistory());

// epam.removeEmployee(2);

// console.log(vasyl.getHistory());

// console.log(epam.getAvarageSalary());
// console.log(epam.getAvarageAge());


// epam.addNewEmployee(5, 6, 9, 5);

// setTimeout(() => {
//     epam.removeEmployee(1);
//     console.log(artem.getWorkTimeInSeconds());
// }, 5000);

// vova.setSalary(900);
// vova.setSalary(2200);
// console.log(vova.getHistory());
