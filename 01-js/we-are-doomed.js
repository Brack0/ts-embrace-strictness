function usingDynamicTypes() {
  var x;

  x = 0;
  x = false;
  // No errors, no warnings
}

function usingClass() {
  class C {
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
  // No errors, no warnings
}
