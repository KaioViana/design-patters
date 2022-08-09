import { Component } from "./Component";
import { Employee } from "./Employee";

class EmployeeComposite extends Employee {
  protected subordinates: Component[] = [];

  constructor(name: string, dept: string, salary: number) {
    super(name, dept, salary);
  }

  public add(component: Component): void {
    this.subordinates.push(component);
    component.setParent(this);
  }

  public remove(component: Component): void {
    const componentIndex = this.subordinates.indexOf(component);
    this.subordinates.splice(componentIndex, 1);
    component.setParent(null);
  }

  public isComposite(): boolean {
    return true
  }

  public toString(): string {
    const results = []
    for (const subordinate of this.subordinates) {
      results.push(subordinate.toString())
    }

    return `Employee composite:\n   ${super.toString()}\nSubordinates:\n${results.join('\n')}`;
  }

}

export { EmployeeComposite }