import { Component } from "./Component";
import { Composite } from "./Composite";
import { Leaf } from "./Leaf";

function clientCode(component: Component) {
  console.log(`RESULT: ${component.operation()}`);
}

const simple = new Leaf();
console.log('Client I\'ve got a simple component');
clientCode(simple);
console.log('');

/**
 * ...as well the complex composites.
 */
const tree = new Composite();
const branch1 = new Composite();

branch1.add(new Leaf());
branch1.add(new Leaf());

console.log('Client code executes branch1');
clientCode(branch1);
console.log('');

const branch2 = new Composite();
branch2.add(new Leaf());

/**
 * Make tree object mold
 */
tree.add(branch1);
tree.add(branch2);

console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);
console.log('');

/**
 * Thanks to the fact that the child-management operations are declared in the
 * base  Component class, the client code can work with any component, simple or
 * complex, without depending on their concrete classes.
 */
function clientCode2(component1: Component, component2: Component) {
  if (component1.isComposite()) {
    component1.add(component2);
  }
  console.log(`RESULT: ${component1.operation()}`);
}

console.log('Client: I don\'t need to check the components classes even when managing the tree');
clientCode2(tree, simple);
console.log('');
