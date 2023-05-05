/* eslint-disable @typescript-eslint/no-namespace */
export namespace ESLintWorld {
  export function notNull() {
    let foo: { bar: () => string } | undefined;

    foo!.bar().split("-");
  }
  export function plusOperand() {
    console.log(1n + 1);
    console.log("5.5" + 5);
  }
}

export namespace ESLintStrictestWorld {
  export function plusOperand() {
    console.log(1n + 1);
    console.log("5.5" + 5); // Insert boring Javascript joke on implicit cast here
  }

  export function baseToString() {
    class MyClass {}
    const value = new MyClass();
    console.log(`Value: ${value}`); // "[object Object]"
  }

  export function throwLiteral() {
    const foo = Math.random();
    if (foo > 0.5) {
      throw "error";
    }

    try {
      const err = new Error();

      throw `${err}`;
    } catch (err) {
      console.log((err as Error).message); // err is not an Error object
    }
  }
}
