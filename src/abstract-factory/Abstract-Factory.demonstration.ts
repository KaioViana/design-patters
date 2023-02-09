interface IActivity {
  execute(): string
}
interface IRetailActivity extends IActivity { }
interface ITextileActivity extends IActivity { }

class RetailContinuousReplenishmentActivity implements IRetailActivity {
  execute(): string {
    return 'Retail continuous replenishment';
  }
}
class RetailReplenishmentActivity implements IRetailActivity {
  execute(): string {
    return 'Retail Replenishment';
  }
}
class TextileContinuousReplenishmentActivity implements ITextileActivity {
  execute(): string {
    return 'Textile continuous replenishment';
  }
}
class TextileReplenishmentActivity implements ITextileActivity {
  execute(): string {
    return 'Textile replenishment';
  }
}

class RetailActivityFactory implements ActivityFactory {
  createContinuousReplenishment() {
    return new RetailContinuousReplenishmentActivity();
  }

  createReplenishment() {
    return new RetailReplenishmentActivity();
  }
}
class TextileActivityFactory implements ActivityFactory {
  createContinuousReplenishment() {
    return new TextileContinuousReplenishmentActivity();
  }

  createReplenishment() {
    return new TextileReplenishmentActivity();
  }
}

abstract class ActivityFactory {
  public static create(type: string): ActivityFactory {
    if (type === 'retail') return new RetailActivityFactory();
    if (type === 'textile') return new TextileActivityFactory();
    throw new Error();
  }

  abstract createContinuousReplenishment(): IActivity;
  abstract createReplenishment(): IActivity;
}

const client = (type: string) => {
  const factory = ActivityFactory.create(type);
  const continuousReplenishment = factory.createContinuousReplenishment();
  const replenishment = factory.createReplenishment();

  console.log(continuousReplenishment.execute());
  console.log(replenishment.execute());
}

client('textile');


