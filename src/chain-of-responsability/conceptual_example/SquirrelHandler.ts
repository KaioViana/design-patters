import { Handler } from "./Handler";

class SquirrelHandler extends Handler {
  public handle(request: string): string | null {
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}`;
    }

    return super.handle(request);
  }
}

export { SquirrelHandler }
