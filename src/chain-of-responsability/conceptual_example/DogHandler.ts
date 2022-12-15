import { Handler } from "./Handler";

class DogHandler extends Handler {
  public handle(request: string): string | null {
    if (request === 'MeatBall') {
      return `Dog: I'll eat the ${request}`
    }

    return super.handle(request)
  }
}

export { DogHandler }
