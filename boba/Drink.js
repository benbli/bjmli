const FLAVORS = ['milk tea', 'taro milk tea'];
const BOBA = ['regular', 'mini'];
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

function freshDrink() {
  return {
    tea: new Tea(FLAVORS[0], 100),
    straw: new Straw(STRAWS[0]),
    boba: new Boba(BOBA[0], 100),
  };
}
