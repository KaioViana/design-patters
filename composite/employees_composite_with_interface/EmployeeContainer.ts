import { Employee } from "./Employee";
import { EmployeeInterface } from "./employee.interface";

class EmployeeContainer implements EmployeeInterface {
  private _container: EmployeeInterface[] = [];

  public add(employee: EmployeeInterface): void {
    this._container.push(employee)
  }

  public remove(employee: EmployeeInterface): void {
    const employeeIndex = this._container.indexOf(employee);
    this._container.splice(employeeIndex, 1);
  }

  public showEmployeeDetails(): void {
    this._container.map((employee: EmployeeInterface) => {
      employee.showEmployeeDetails()
    })
  }
}

export { EmployeeContainer }