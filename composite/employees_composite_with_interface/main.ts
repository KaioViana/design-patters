/**
 * This code exemplifies application of the composite pattern with interface in scenario
 * of employees.
 * With this pattern we can manipulate the employee or an set of employees
 * with the same operation.
 * For example, list yours subordinates or calculate sum of yours salaries
 */

import { Employee } from './Employee';
import { Employee2 } from './Employee2';
import { EmployeeContainer } from './EmployeeContainer';

// an simple employee
console.log('Simple employee');
const simpleEmployee = new Employee('Bob', 'clerk', 2000);
simpleEmployee.showEmployeeDetails();

// an composite employees
console.log('\nComposite employees');
const emp1 = new Employee2('Lucy', 'clerk', 2000); // exemplifies the another class with similar behavior. In this case the composite can process equal
const emp2 = new Employee('Tony', 'clerk', 3000);
const emp3 = new Employee('John', 'clerk', 4000);
const emp4 = new Employee('Mark', 'clerk', 5000);
const company = new EmployeeContainer();
company.add(emp1)
company.add(emp2)
company.add(emp3)
company.add(emp4)
company.showEmployeeDetails();