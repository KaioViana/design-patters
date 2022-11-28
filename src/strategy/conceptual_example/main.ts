import { Context } from "./Context";
import { ReverseArray } from "./ReverseArray";
import { SortArray } from "./SortArray"

(async () => {
  const sortArray = new SortArray();
  const reverseArray = new ReverseArray();

  const context = new Context(sortArray);

  // execute with default object algorithm
  context.doSomeBusinessLogic();

  // set new object al
  context.setStrategy(reverseArray);

  // execute
  context.doSomeBusinessLogic();
})()
