interface Command {
  execute(): void;
}

class Receiver {
  public doSomeThing(a: string): void {
    console.log(`Receiver: Working on (${a})`);
  }

  public doSomeThingElse(b: string): void {
    console.log(`Receiver: Also working on (${b})`);
  }
}

class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}

class ComplexCommand implements Command {
  private receiver: Receiver;
  private a: string;
  private b: string;

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  execute(): void {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
    this.receiver.doSomeThing(this.a);
    this.receiver.doSomeThingElse(this.b);
  }
}

class Invoker {
  private onStart: Command;
  private onFinish: Command;

  constructor(onStart: Command, onFinish: Command) {
    this.onStart = onStart;
    this.onFinish = onFinish;
  }


  public doSomeThingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin ?');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log('Invoker: ...doing something really important...');

    console.log('Invoker: Does anybody want someting done after I finish ?');
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: Command): object is Command {
    return object.execute !== undefined
  }
}

(() => {
  const simpleCommand = new SimpleCommand('Say hi');
  const receiver = new Receiver();
  const complexCommand = new ComplexCommand(receiver, 'Send email', 'Save report');
  const invoker = new Invoker(simpleCommand, complexCommand);
  invoker.doSomeThingImportant();
})()
