import { BaseDecorator } from "./BaseDecorator";

class ConcreteDecoratorB extends BaseDecorator {
  public operation(): string {
    return `ConcreteDecoratorB: ${super.operation()}`
  }
}

export { ConcreteDecoratorB }

