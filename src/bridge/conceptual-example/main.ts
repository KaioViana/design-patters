interface Implementation {
  operationImplementation(): string;
}

class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with: ${result}`;
  }
}

class ExtendedAbstration extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with: ${result}`;
  }
}

class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationA: Here the result on the platform A.';
  }
}

class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return 'ConcreteImplementationB: Here the result on the platform B.';
  }
}

const clientCode = (abstraction: Abstraction) => {
  console.log(abstraction.operation());
}

(() => {
  let implementation = new ConcreteImplementationA();
  let abstraction = new Abstraction(implementation);
  clientCode(abstraction);

  implementation = new ConcreteImplementationB();
  abstraction = new ExtendedAbstration(implementation);
  clientCode(abstraction);
})()


