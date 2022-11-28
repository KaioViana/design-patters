import { ComponentInterface } from "./component.interface";

class ConcreteComponent implements ComponentInterface {
  public operation(): string {
    return 'ConcreteComponent';
  }
}

export { ConcreteComponent }

