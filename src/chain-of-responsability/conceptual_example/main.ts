import { request } from "http";
import { DogHandler } from "./DogHandler";
import { Handler } from "./Handler";
import { MonkeyHandler } from "./MonkeyHandler";
import { SquirrelHandler } from "./SquirrelHandler";

(async () => {
  const foods = ['Banana', 'Nut', 'Cup of coffe'];

  const monkey = new MonkeyHandler();
  const squirrel = new SquirrelHandler();
  const dog = new DogHandler();

  const execute = (handler: Handler) => {
    for (const food of foods) {
      console.log(`Client: Who wants a ${food}?`);

      const result = handler.handle(food);

      console.log(`  ${result}.`);
    }
  }

  monkey.setNext(squirrel).setNext(dog);

  console.log('Chain: Monkey > Squirrel > Dog\n');
  execute(monkey);
  console.log('');

  console.log('Subchain: Squirrel > Dog\n');
  execute(squirrel);
  console.log('');
})()
