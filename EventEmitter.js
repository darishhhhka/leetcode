// Создайте EventEmitterкласс. Этот интерфейс похож (но с некоторыми отличиями) на интерфейс Node.js или интерфейс Event Target в DOM. Он EventEmitterдолжен позволять подписываться на события и отправлять их.

// Ваш EventEmitterкласс должен иметь следующие два метода:

// subscribe — этот метод принимает два аргумента: имя события в виде строки и функцию обратного вызова. Эта функция обратного вызова будет вызвана позже при генерации события.
// Событие должно иметь несколько прослушивателей для одного и того же события. При генерации события с несколькими обратными вызовами каждый из них должен вызываться в порядке подписки. Должен быть возвращен массив результатов. Можно предположить, что ни один из переданных обратных вызовов не  subscribe является ссылочно идентичным.
// Метод subscribeтакже должен возвращать объект с unsubscribe методом, позволяющим пользователю отписаться. При его вызове обратный вызов должен быть удален из списка подписок и  undefined возвращен.
// emit — этот метод принимает два аргумента: имя события в виде строки и необязательный массив аргументов, которые будут переданы функциям обратного вызова. Если на данное событие не подписаны ни одна функция обратного вызова, возвращается пустой массив. В противном случае возвращается массив результатов всех вызовов функций обратного вызова в порядке их подписки.

class EventEmitter {
  events = {};
  subscribe(eventName, callback) {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
    return {
      unsubscribe: () => {
        console.log("unsbscribe");
        console.log("before", this.events);
        console.log(eventName);

        this.events[eventName] = this.events[eventName].filter((call) => {
          console.log(call);
          console.log(call !== callback);

          return call !== callback;
        });
        console.log("after", this.events);
        return;
      },
    };
  }

  emit(eventName, args = []) {
    console.log("emit", this.events["firstEvent"]);

    if (!this.events[eventName]) return [];
    return this.events[eventName].map((fn) => {
      return fn(...args);
    });
  }
}

// const emitter = new EventEmitter();
// console.log(emitter.emit("firstEvent"));

// // [], no callback are subscribed yet
// emitter.subscribe("firstEvent", function cb1() {
//   return 5;
// });
// emitter.subscribe("firstEvent", function cb2() {
//   return 6;
// });
// console.log(emitter.emit("firstEvent"));

// const emitter = new EventEmitter();
// const sub = emitter.subscribe("firstEvent", (...args) => args.join(","));
// emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// sub.unsubscribe(); // undefined
// emitter.emit("firstEvent", [4, 5, 6]); // [], there are no subscriptions

const emitter = new EventEmitter();
const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
sub1.unsubscribe(); // undefined
emitter.emit("firstEvent", [5]); // [7]
