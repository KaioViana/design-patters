import { AbstractProductA } from "./abstract-product-a.interface";
import { AbstractProductB } from "./abstract-product-b.interface";

interface AbstractFactoryInterface {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

export { AbstractFactoryInterface }
