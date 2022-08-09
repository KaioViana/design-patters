import { Component } from "./Component";

class Employee extends Component {
  private _name: string;
  private _dept: string;
  private _salary: number;

  constructor(name: string, dept: string, salary: number) {
    super();
    this._name = name;
    this._dept = dept;
    this._salary = salary;
  }

  public toString(): string {
    return `Employee: Name: ${this._name}; Dept: ${this._dept}; Salary: ${this._salary}`;
  }
}

export { Employee };
