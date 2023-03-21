import { reverse } from "dns";

interface IteratorInterface<T> {
  current(): T;
  next(): T;
  key(): number;
  valid(): boolean;
  rewind(): void;
}

interface Aggregator {
  getIterator(): IteratorInterface<string>;
}

class AlphabeticalOrderIterator implements IteratorInterface<string> {
  private collection: WordsCollection;

  private position: number = 0;

  private reverse: boolean;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = this.collection.getCount() - 1;
    }
  }

  public rewind() {
    this.position = this.reverse ?
      this.collection.getCount() - 1 :
      0;
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  public key(): number {
    return this.position;
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }

}

class WordsCollection implements Aggregator {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): IteratorInterface<string> {
    return new AlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): IteratorInterface<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}

(() => {
  const collection = new WordsCollection();
  collection.addItem('First');
  collection.addItem('Second');
  collection.addItem('Third');

  const iterator = collection.getIterator();

  console.log('Straight traversal:');
  while (iterator.valid()) {
    console.log(iterator.next());
  }

  console.log('');
  console.log('Reverse traversal:');
  const reverseIterator = collection.getReverseIterator();
  while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
  }
})()

