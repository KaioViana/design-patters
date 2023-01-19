import { AbstractFactoryInterface } from "./abstract-factory.interface";
import { AbstractProductA } from "./abstract-product-a.interface";
import { AbstractProductB } from "./abstract-product-b.interface";
import { ConcreteProductA1 } from "./ConcreteProductA1";
import { ConcreteProductB1 } from "./ConcreteProductB1";

class ConcreteFactory1 implements AbstractFactoryInterface {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

export { ConcreteFactory1 }
