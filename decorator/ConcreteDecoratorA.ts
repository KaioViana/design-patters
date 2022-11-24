import { BaseDecorator } from "./BaseDecorator";

class ConcreteDecoratorA extends BaseDecorator {
  public operation(): string {
    return `ConcreteDecoratorA: ${super.operation()}`
  }
}

export { ConcreteDecoratorA }

