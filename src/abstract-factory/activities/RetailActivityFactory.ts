import { ActivityFactoryInterface } from "./activity-factory.interface";
import { RetailActivity, RetailActivityType } from "./implementations/RetailActivity";

class RetailActivityFactory implements ActivityFactoryInterface<RetailActivityType> {
  createContinuousReplenishment(data: Partial<RetailActivityType>): RetailActivityType {
    const category = 'constinuous_replenishment';
    const retailActivity = new RetailActivity(category, data);
    const activity = retailActivity.generateActivity();

    return activity;
  }

  createReplenishment(data: Partial<RetailActivityType>): RetailActivityType {
    const category = 'replenishment';
    const retailActivity = new RetailActivity(category, data);
    const activity = retailActivity.generateActivity();

    return activity;
  }
}

export { RetailActivityFactory };
