import { Activity } from "../activity.interface";

type RetailActivityType = {
  workerId: string;
  category: string;
  type: string;
  price: string;
}

class RetailActivity implements Activity<RetailActivityType> {
  private category: string;
  private data: Partial<RetailActivityType>;

  constructor(category: string, data: Partial<RetailActivityType>) {
    this.category = category;
    this.data = data;
  }

  public generateActivity(): RetailActivityType {
    const activity = {
      category: this.category,
      ...this.data
    } as RetailActivityType

    return activity;
  }
}

export { RetailActivity, RetailActivityType }
