import { AbstractProductA } from "./abstract-product-a.interface";
import { AbstractProductB } from "./abstract-product-b.interface";

class ConcreteProductB2 implements AbstractProductB {
  public usefulFunctionB(): string {
    return 'The result of the product B2';
  }

  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunction();
    return 'The result of the B2 collaborating with the ' + result;
  }
}

export { ConcreteProductB2 }
