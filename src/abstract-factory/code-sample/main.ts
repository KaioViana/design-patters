interface IAbstractFactory<T> {
  createProductA(): T;
  createProductB(): T;
}

type ProductType = {
  productType: string;
  concreteFactoryImplemented: string;
  optionalParam?: string;
};

interface IProduct {
  owner: string;
  execute(): ProductType;
}
interface IAbstractProductA extends IProduct { };
interface IAbstractProductB extends IProduct { };

class ConcreteFactory1 implements IAbstractFactory<IProduct> {

  createProductA(): IAbstractProductA {
    return new ConcreteProductA1('ConcreteFactory1');
  }
  createProductB(): IAbstractProductB {
    return new ConcreteProductB1('ConcreteFactory1');
  }
}

class ConcreteFactory2 implements IAbstractFactory<IProduct> {
  createProductA(): IAbstractProductA {
    return new ConcreteProductA2('ConcreteFactory2');
  }
  createProductB(): IAbstractProductB {
    return new ConcreteProductB2('ConcreteFactory2');
  }
}

class ConcreteProductA1 implements IAbstractProductA {
  owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }

  execute(): ProductType {
    return {
      productType: 'ConcreteProductA1',
      concreteFactoryImplemented: this.owner
    }
  }
};

class ConcreteProductA2 implements IAbstractProductA {
  owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }

  execute(): ProductType {
    return {
      productType: 'ConcreteProductA2',
      concreteFactoryImplemented: this.owner
    }
  }
};

class ConcreteProductB1 implements IAbstractProductB {
  owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }

  execute(): ProductType {
    return {
      productType: 'ConcreteProductB1',
      concreteFactoryImplemented: this.owner
    }

  }
};
class ConcreteProductB2 implements IAbstractProductB {
  owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }

  execute(): ProductType {
    return {
      productType: 'ConcreteProductB2',
      concreteFactoryImplemented: this.owner,
      optionalParam: 'Description field',
    }
  }
};

function appClientCode(factory: IAbstractFactory<IProduct>) {
  console.log('');
  const productA = factory.createProductA();
  console.log(productA.execute())
  console.log('');
  const productB = factory.createProductB();
  console.log(productB.execute());
}

(() => {
  const concreteFactory1 = new ConcreteFactory1();
  const concreteFactory2 = new ConcreteFactory2();
  appClientCode(concreteFactory1);
  appClientCode(concreteFactory2);
})();
