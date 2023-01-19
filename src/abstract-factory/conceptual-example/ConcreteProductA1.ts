import { AbstractProductA } from "./abstract-product-a.interface";

class ConcreteProductA1 implements AbstractProductA {
  public usefulFunction(): string {
    return 'The result of the product A1';
  }
}

export { ConcreteProductA1 }
