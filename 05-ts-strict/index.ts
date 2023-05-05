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
    console.log(loggedInUser.age);
  }

  export function strictBindCallApply() {
    function fn(x: string) {
      return parseInt(x);
    }

    const n1 = fn.call(undefined, "10");
    const n2 = fn.call(undefined, false);
  }

  export function strictFunctionTypes() {
    function fn(x: string) {
      console.log("Hello, " + x.toLowerCase());
    }

    type StringOrNumberFunc = (ns: string | number) => void;

    let func: StringOrNumberFunc = fn;
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

    new UserAccount("foo").method();
  }

  export function implicitAny() {
    function fn(s) {
      console.log(s.subtr(3));
    }

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

    new Rectangle(42, 42).getAreaFunction()();
  }
}

namespace TSStrictestWorld {
  export function unusedLabels() {
    function verifyAge(age: number) {
      // Forgot 'return' statement
      if (age > 18) {
        verified: true; // IDE might give a little hint here
      }
    }

    verifyAge(42);
  }

  export function unreachableCode() {
    function fn(n: number) {
      if (n > 5) {
        return true;
      } else {
        return false;
      }
      // Dead code - IDE might give a little hint here
      return true;
    }

    fn(42);
  }

  export function exactOptionalPropertyTypes() {
    interface UserDefaults {
      // The absence of a value represents 'system'
      colorThemeOverride?: "dark" | "light";
    }

    function getUserSettings(): UserDefaults {
      return {};
    }

    const settings = getUserSettings();
    settings.colorThemeOverride = "dark";
    settings.colorThemeOverride = "light";

    // Nitpick : Set `colorThemeOverride: undefined` is not the same as colorThemeOverride not being defined
    settings.colorThemeOverride = undefined;
  }

  export function fallthroughCasesInSwitch() {
    const a: number = 6;

    switch (a % 2) {
      case 0:
        console.log("even"); // `break` or `return` missing here
      case 1:
        console.log("odd");
        break;
    }
  }

  export function implicitOverride() {
    class Album {
      setup() {}
    }

    class MLAlbum extends Album {
      override setup() {}
    }

    class SharedAlbum extends Album {
      // Implicit override (for OOP freaks)
      setup() {}
    }

    new MLAlbum();
    new SharedAlbum();
  }

  export function implicitReturn() {
    function doThing(name: string) {
      if (name) {
        return name;
      } else {
        // This code path doesn't return a value
      }
    }

    doThing("foo");
  }

  export function propertyAccessFromIndexSignature() {
    interface GameSettings {
      // Known up-front properties
      speed: "fast" | "medium" | "slow";
      quality: "high" | "low";

      // Assume anything unknown to the interface is a string.
      [key: string]: string;
    }

    function getGameSettings(): GameSettings {
      return { speed: "fast", quality: "high" };
    }

    const settings = getGameSettings();
    settings.speed;
    settings.quality;

    // `username` here is accessed the same way as an known up-front properties
    settings.username;
  }

  export function unusedLocal() {
    const createKeyboard = (modelID: number) => {
      const defaultModelID = 23;
      return { type: "keyboard", modelID };
    };

    createKeyboard(42);
  }

  export function unusedParameter() {
    const createDefaultKeyboard = (modelID: number) => {
      const defaultModelID = 23;
      return { type: "keyboard", modelID: defaultModelID };
    };

    createDefaultKeyboard(42);
  }
}
