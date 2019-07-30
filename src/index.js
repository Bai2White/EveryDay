
// import {cube} from './math.js'

// function component() {
//   var element = document.createElement('pre');

//   element.innerHTML = [
//     'Hello webpack!',
//     '5 cubed is equal to' + cube(51)
//   ].join('\n\n');

//   return element;
// }

// document.body.appendChild(component());
// const dateFinal = new Date('Thu Apr 25 2019 15:33:19 GMT+0800 (China Standard Time)');
// const dateInitial = new Date('Thu Apr 25 2019 15:33:19 GMT+0800 (China Standard Time)');
// const getDaysDiffBetweenDates = (dateFinal, dateInitial) => (dateFinal - dateInitial) / (1000 * 3600 * 24);

// var serialNumber = {
//   $n: 1,
//   get next() {
//     return this.$n++;
//   },
//   set next(n) {
//     if (n >= this.$n) this.$n = n;
//     else throw "序2列值不能比当前小";
//   }
// }
// serialNumber.next = 1;
// console.log(serialNumber.$n);

// Object.defineProperty(serialNumber, 'b', { set: function(x) { this.a = Math.ceil(x/2); } });
// serialNumber.b = 5;
// console.log(serialNumber.a);
// console.log(Object.getOwnPropertyDescriptor(serialNumber));

// function sum(...args) {
//   return args.reduce((a1, a2) => a1 + a2)21
// }
// console.log(sum(1,2,2,3));

// for(var i = 0; i < 10; i++) {
//   console.log(i);
// }
function test() {
  var i = 2;
  let i = 3;
  console.log(i);
}
test();
