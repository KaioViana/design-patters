import { AbstractProductA } from "./abstract-product-a.interface";

class ConcreteProductA2 implements AbstractProductA {
  public usefulFunction(): string {
    return 'The result of the product A2';
  }
}

export { ConcreteProductA2 }
