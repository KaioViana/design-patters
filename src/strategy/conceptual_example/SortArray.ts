import { StrategyInterface } from "./strategy.interface";

class SortArray implements StrategyInterface {
  public doAlgorithm(data: number[]): number[] {
    return data.sort();
  }
}

export { SortArray }
