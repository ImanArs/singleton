class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
      this.counter = 0; // Инициализируем счетчик значением 0
    }

    return Singleton.instance;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  getCounter() {
    return this.counter;
  }
}

// Использование Singleton с счетчиком
const instance1 = new Singleton();
const instance2 = new Singleton();

instance1.increment(); // Увеличиваем счетчик экземпляра instance1
instance1.increment();
instance1.increment();
instance2.increment(); // Увеличиваем счетчик экземпляра instance1
instance2.decrement(); // Уменьшаем счетчик экземпляра instance1

console.log(instance1.getCounter()); // - значение счетчика для instance1
console.log(instance2.getCounter()); // - значение счетчика для instance2

// class Counter {
//   constructor() {
//     this.counter = 0;
//   }

//   increment() {
//     this.counter++;
//   }

//   decrement() {
//     this.counter--;
//   }

//   getCounter() {
//     return this.counter;
//   }
// }

// // Использование нескольких экземпляров класса Counter
// const instance1 = new Counter();
// const instance2 = new Counter();

// instance1.increment(); // Увеличиваем счетчик экземпляра instance1
// instance1.increment();
// instance2.increment(); // Увеличиваем счетчик экземпляра instance2
// instance2.decrement(); // Уменьшаем счетчик экземпляра instance2

// console.log(instance1.getCounter()); // 2 - значение счетчика для instance1
// console.log(instance2.getCounter()); // 0 - значение счетчика для instance2
