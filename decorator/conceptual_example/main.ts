import { ConcreteComponent } from "./ConcreteComponent"
import { ConcreteDecoratorA } from "./ConcreteDecoratorA";
import { ConcreteDecoratorB } from "./ConcreteDecoratorB";

(() => {
  const simple = new ConcreteComponent();
  console.log('Simple component operation:', simple.operation());

  const decorator1 = new ConcreteDecoratorA(simple);
  console.log('Simple component add decoratorA:', decorator1.operation());

  const decorator2 = new ConcreteDecoratorB(decorator1);
  console.log('Decorator1 add DecoratorB (Decorator B => Decarator A => simple):', decorator2.operation());
})()
