interface HandlerInterface {
  setNext(handler: HandlerInterface): HandlerInterface;
  handle(request: string): string | null;
}

export { HandlerInterface }
