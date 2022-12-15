import { Handler } from "./Handler";

class MonkeyHandler extends Handler {
  public handle(request: string): string | null {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}`;
    }
    return super.handle(request);
  }
}

export { MonkeyHandler }
