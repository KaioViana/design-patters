/**
 * The container. Applies the commons methods to both objects (boxes or "boxes of boxes").
 */

abstract class Container {
  protected private!: Container | null;

  public add(component: Container): void { }
  public remove(component: Container): void { }

  public isComposit(): boolean {
    return false
  }

  public abstract getTotal(): number;
}

export { Container }
