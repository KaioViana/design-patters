import { ActivityFactoryInterface } from "./activity-factory.interface";
import { RetailActivityType } from "./implementations/RetailActivity";
import { RetailActivityFactory } from "./RetailActivityFactory";
const ACTIVITY_GROUP = 'RETAIL';
const CATEGORY = 'replenishment'

const data = {
  workerId: '123',
  type: 'picker',
  price: '1000'
}

const clientCode = <T>(factory: ActivityFactoryInterface<T>) => {
  const activity = CATEGORY === 'replenishment' ? factory.createReplenishment(data) :
    factory.createContinuousReplenishment(data);

  console.log(activity);
}

(() => {
  switch (ACTIVITY_GROUP) {
    case 'RETAIL':
      const factory = new RetailActivityFactory()
      clientCode<RetailActivityType>(factory);
      break;
    default:
      break;
  }
})()
