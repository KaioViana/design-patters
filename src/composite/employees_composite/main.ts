/**
 * This code exemplifies application of the composite pattern in scenario
 * of employees.
 * With this pattern we can manipulate the employee or an set of employees
 * with the same operation.
 * For example, list yours subordinates or calculate sum of yours salaries
 */

import { Employee } from "./Employee";
import { EmployeeComposite } from "./EmployeeComposite";

// an simple employee
console.log('Simple employee');
const simpleEmployee = new Employee('Bob', 'clerk', 2000);
console.log(simpleEmployee.toString(), '\n');

// an composite employee
console.log('Head marketing with subordinates');
const clerk1 = new Employee('Jhonn', 'clerk', 2000);
const clerk2 = new Employee('Lucy', 'clerk', 2000);
const headMarketing = new EmployeeComposite('Jack', 'head marketing', 20000);
headMarketing.add(clerk1);
headMarketing.add(clerk2);
console.log(headMarketing.toString(), '\n');

// an CEO composite employee
console.log('CEO (top of the hierarchic)');
const ceo = new EmployeeComposite('Bezos', 'ceo', 30000);
ceo.add(headMarketing);
console.log(ceo.toString());
