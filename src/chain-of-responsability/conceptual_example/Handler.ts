import { HandlerInterface } from "./handler.interface";

abstract class Handler implements HandlerInterface {
  private nextHandler: HandlerInterface | null = null;

  public setNext(handler: HandlerInterface): HandlerInterface {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request)
    }

    return null;

  }
}

export { Handler }
