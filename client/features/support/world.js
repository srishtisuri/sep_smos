const { setWorldConstructor } = require('cucumber')

class CustomWorld {
  constructor() {
    this.username = '';
    this.password = '';
  }

  incrementBy(number) {
    this.variable += number
  }
}

setWorldConstructor(CustomWorld)