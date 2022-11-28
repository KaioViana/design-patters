import { StrategyInterface } from "./strategy.interface";

class Context {
  private _strategy: StrategyInterface;

  constructor(strategy: StrategyInterface) {
    this._strategy = strategy;
  }

  public setStrategy(strategy: StrategyInterface) {
    this._strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    const result = this._strategy.doAlgorithm([1, 3, 2, 5, 4, 6]);
    console.log(result.join(','));
  }
}

export { Context }
