namespace TSWorld {
  export function usingDynamicTypes() {
    var x: number;

    x = 0;
    x = false;
  }

  export function usingClass() {
    class C {
      public constructorOnly: number;
      public constructorUnknown: number;
      public prop: number | undefined;
      public count: number | undefined;

      constructor() {
        this.constructorOnly = 0;
        this.constructorUnknown = undefined;
        this.prop = undefined;
        this.count;
      }
      method() {
        this.constructorOnly = false;
        this.constructorUnknown = "plunkbat";
        this.methodOnly = "ok";
      }
      method2() {
        this.methodOnly = true;
      }
    }

    let c = new C();
    c.prop = 0;
    c.count = "string";
  }
}

namespace TSStrictWorld {
  export function strictNullChecks() {
    const users = [
      { name: "Oby", age: 12 },
      { name: "Heera", age: 32 },
    ];

    const loggedInUser = users.find((u) => u.name === "foo");
    // Unsafe call - loggedInUser is undefined
    console.log(loggedInUser.age);
  }

  export function strictBindCallApply() {
    function fn(x: string) {
      return parseInt(x);
    }

    const n1 = fn.call(undefined, "10");
    // Unsafe call - expecting string, got boolean
    const n2 = fn.call(undefined, false);
  }

  export function strictFunctionTypes() {
    function fn(x: string) {
      console.log("Hello, " + x.toLowerCase());
    }

    type StringOrNumberFunc = (ns: string | number) => void;

    // Unsafe assignment
    let func: StringOrNumberFunc = fn;
    // Unsafe call - will crash
    func(10);
  }

  export function strictPropertyInitialization() {
    class UserAccount {
      name: string;
      accountType = "user";

      email: string;
      address: string | undefined;

      constructor(name: string) {
        this.name = name;
      }

      method() {
        console.log(this.email.split("@"));
      }
    }

    // Unsafe call - email is undefined
    new UserAccount("foo").method();
  }

  export function implicitAny() {
    function fn(s) {
      console.log(s.subtr(3));
    }

    // Unsafe call - will crash
    fn(42);
  }

  export function implicitThis() {
    class Rectangle {
      width: number;
      height: number;

      constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
      }

      getAreaFunction() {
        return function () {
          return this.width * this.height;
        };
      }
    }

    // Unsafe call - will crash
    new Rectangle(42, 42).getAreaFunction()();
  }
}
