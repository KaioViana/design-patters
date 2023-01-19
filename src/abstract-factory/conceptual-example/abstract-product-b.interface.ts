import { AbstractProductA } from "./abstract-product-a.interface";

interface AbstractProductB {
  usefulFunctionB(): string;

  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

export { AbstractProductB } 
