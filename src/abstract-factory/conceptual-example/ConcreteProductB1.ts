import { AbstractProductA } from "./abstract-product-a.interface";
import { AbstractProductB } from "./abstract-product-b.interface";

class ConcreteProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return 'The result of the product B1';
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunction();
    return 'The result of the B1 collaborating with the ' + result;
  }
}

export { ConcreteProductB1 }
