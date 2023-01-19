import { AbstractFactoryInterface } from "./abstract-factory.interface";
import { AbstractProductA } from "./abstract-product-a.interface";
import { AbstractProductB } from "./abstract-product-b.interface";
import { ConcreteProductA2 } from "./ConcreteProductA2";
import { ConcreteProductB2 } from "./ConcreteProductB2";

class ConcreteFactory2 implements AbstractFactoryInterface {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

export { ConcreteFactory2 }
