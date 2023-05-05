// @ts-check

function usingDynamicTypes() {
  /** @type {number} */
  var x;

  x = 0;
  x = false;
}

function usingClass() {
  class C {
    constructor() {
      /** @type {number} */
      this.constructorOnly = 0;
      /** @type {number} */
      this.constructorUnknown = undefined;
      /** @type {number | undefined} */
      this.prop = undefined;
      /** @type {number | undefined} */
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
