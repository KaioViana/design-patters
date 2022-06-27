import { Container } from "./Container";

class Product extends Container {
  private _name: string;
  private _code: string;
  private _value: number;

  constructor(name: string, code: string, value: number) {
    super();
    this._name = name;
    this._code = code;
    this._value = value;
  }

  public getTotal(): number {
    return this._value;
  }

  toString(): string {
    return `Name: ${this._name}; Code: ${this._code}; Value: ${this._value}`
  }
}