const FLAVORS = ['milk tea', 'taro milk tea'];
const BOBA = [20, 5];
const STRAWS = ['blue', 'red'];

export default class Drink {
  constructor(drink = freshDrink()) {
    this.drink = drink;
  }
  sip() {
    // remove boba
    // remove tea
  }
}

class Tea {
  constructor(flavor, quantity) {
    this.flavor = flavor;
    this.quantity = quantity;
  }
}

class Straw {
  constructor(color) {
    this.color = color;
  }
}

class Boba {
  constructor(size, quantity) {
    this.size = size;
    this.quantity = quantity;
  }
  add() {}
  remove() {}
}

class Ball {
  constructor(size = 10) {
    this.size = size;
    this.pos = new Vec();
    this.vel = new Vec();
  }
}

class Vec {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

function freshDrink() {
  return {
    tea: new Tea(FLAVORS[0], 500),
    straw: new Straw(STRAWS[0]),
    boba: new Boba(BOBA[0], 100),
  };
}
