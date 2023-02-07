interface IActivity { }

interface IRetailActivity extends IActivity { }
interface ITextileActivity extends IActivity { }

class RetailContinuousActivity implements IRetailActivity { }
class RetailReplenishmentActivity implements IRetailActivity { }

class TextileContinuousActivity implements IRetailActivity { }
class TextileReplenishmentActivity implements IRetailActivity { }


class RetailActivityFactory implements ActivityFactory {
  public createContinuousActivity(): IActivity {
    return new RetailContinuousActivity();
  }

  public createReplenishmentActivity(): IActivity {
    return new RetailReplenishmentActivity();
  }
}

class TextileActivityFactory implements ActivityFactory {
  public createContinuousActivity() {
    return new TextileContinuousActivity();
  }
  public createReplenishmentActivity() {
    return new TextileReplenishmentActivity();
  }
}

abstract class ActivityFactory {
  public static create(type: string): ActivityFactory {
    if (type === 'retail') return new RetailActivityFactory();
    if (type === 'textile') return new TextileActivityFactory();

    throw new Error('Não existe');
  }
  abstract createContinuousActivity(): IActivity;
  abstract createReplenishmentActivity(): IActivity;

}

class Client {
  readonly _factory: ActivityFactory;
  constructor(type: string) {
    this._factory = ActivityFactory.create(type);
  }

  public execute() {
    const instance = this._factory.createReplenishmentActivity();
  }
}

const client = new Client('retail');




