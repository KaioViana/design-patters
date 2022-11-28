import { StrategyInterface } from "./strategy.interface";

class ReverseArray implements StrategyInterface {
  doAlgorithm(data: number[]): number[] {
    return data.reverse();
  }
}

export { ReverseArray }
