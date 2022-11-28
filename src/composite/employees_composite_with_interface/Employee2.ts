import { EmployeeInterface } from "./employee.interface";

class Employee2 implements EmployeeInterface {
  private _name: string;
  private _dept: string;
  private _salary: number;

  constructor(name: string, dept: string, salary: number) {
    this._name = name;
    this._dept = dept;
    this._salary = salary
  }

  showEmployeeDetails(): void {
    console.log(`Name: ${this._name}; Dept: ${this._dept}; Salary: ${this._salary}`)
  }
}

export { Employee2 }
