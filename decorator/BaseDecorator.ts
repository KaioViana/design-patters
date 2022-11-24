import { ComponentInterface } from "./component.interface";

class BaseDecorator implements ComponentInterface {
  protected component: ComponentInterface;

  constructor(component: ComponentInterface) {
    this.component = component
  }

  public operation(): string {
    return this.component.operation();
  }
}

export { BaseDecorator }

