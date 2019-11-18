// let str = "#";
// for(let i = 0; i < 7; i++) {
//   console.log(str);
//   str+='#';
// }
// for(let i = 1;i < 101;i++) {
//   let view = i;
//   if(!(i%5)) {
//     if(i%3) {
//       view = 'Buzz';
//     }
//     view = 'FizzBuzz';
//   }
//   console.log(view);
// }
// let view = "";
// for(let i = 0;i < 8;i++) {
//   if(i%2) {
//     view += "####\n";
//     continue;
//   }
//   view += " ####\n";
// }
// console.log(view);
// function output(size = 8) {
//   let view = "";
//   let con = "";
//   for(let i = 0;i < size;i++) {
//     con+="#";
//   }
//   for(let i = 0;i < size;i++) {
//     if(i%2) {
//       view += `${con}\n`;
//       continue;
//     }
//     view += ` ${con}\n`;
//   }
//   console.log(view);
// }
// output(10);

// var obj = {
//   name: 'xiabai',
// };
// console.log(obj.hasOwnProperty('prototype'));
// console.log(obj.constructor);
// console.log(obj.__proto__);
// var obj = function(name, sex) {
//   this.name = name;
// }
// obj.prototype.get_name = function() {
//   return this.name;
// };
// console.log(obj.constructor);
// var obj1 = new obj('xiabai');
// console.log(obj1.get_name());
// console.log(obj.get_name());
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.getInfo = function() {
//     console.log('name:'+this.name+' age:'+this.age);
//   }
// }
// var will = new Person('will', '23');

// // console.log(will);
// console.log(will.__proto__);
// console.log(will.constructor);
// function Person(name) {
//   this.name = name || "汪汪";
//   this.getName = function() {
//     console.log(this.name);
//   }
// }
// const cat = {
//   name: '喵喵喵'
// }
// const person = new Person();
// const person2 = new Person('吱吱吱');
// person2.getName();
// console.log(person);
// person.getName();
// person.getName.call(cat);
// person.getName();



// 函数防抖！！！
// const _now = Date.now || function () {
//   return new Date().getTime();
// }

//  const throttle = function (func, wait, options = {}) {
//   let context, args, result;
//   let timeout = null;
//   let previous = 0;

//   const later = function () {
//     previous = options.leading === false ? 0 : _now();
//     timeout = null;
//     result = func.apply(context, args);

//     if (!timeout) context = args = null;
//   };

//   return function () {
//     // 记录当前时间戳
//     const now = _now();

//     if (!previous && options.leading === false) previous = now;

//     const remaining = wait - (now - previous);
//     context = this;
//     args = arguments;

//     if (remaining <= 0 || remaining > wait) {
//       if (timeout) {
//         clearTimeout(timeout);
//         // 解除引用，防止内存泄露
//         timeout = null;
//       }
//       previous = now;
//       result = func.apply(context, args);
//       if (!timeout) context = args = null;
//     } else if (!timeout && options.trailing !== false) { // 最后一次需要触发的情况
//       timeout = setTimeout(later, remaining);
//     }
//     // 回调返回值
//     return result;
//   };
// }

// // 函数去抖（连续事件触发结束后只触发一次）
// // sample 1: debounce(function(){}, 1000)
// // 连续事件结束后的 1000ms 后触发
// // sample 1: debounce(function(){}, 1000, true)
// // 连续事件触发后立即触发（此时会忽略第二个参数）
// /* eslint-disable */
// const _now = Date.now || function () {
//   return new Date().getTime();
// }

// const throttle = function (func, wait, options = {}) {
//   let context, args, result;
//   let timeout = null;
//   let previous = 0;

//   const later = function () {
//     previous = options.leading === false ? 0 : _now();
//     timeout = null;
//     result = func.apply(context, args);

//     if (!timeout) context = args = null;
//   };

//   return function () {
//     // 记录当前时间戳
//     const now = _now();

//     if (!previous && options.leading === false) previous = now;

//     const remaining = wait - (now - previous);
//     context = this;
//     args = arguments;

//     if (remaining <= 0 || remaining > wait) {
//       if (timeout) {
//         clearTimeout(timeout);
//         // 解除引用，防止内存泄露
//         timeout = null;
//       }
//       previous = now;
//       result = func.apply(context, args);
//       if (!timeout) context = args = null;
//     } else if (!timeout && options.trailing !== false) { // 最后一次需要触发的情况
//       timeout = setTimeout(later, remaining);
//     }
//     // 回调返回值
//     return result;
//   };
// }

// 函数去抖（连续事件触发结束后只触发一次）
// sample 1: debounce(function(){}, 1000)
// 连续事件结束后的 1000ms 后触发
// sample 1: debounce(function(){}, 1000, true)
// 连续事件触发后立即触发（此时会忽略第二个参数）
/* eslint-disable */
// const debounce = function (func, wait, immediate) {
//   let timeout, args, context, timestamp, result;

//   const later = function () {
//     const last = _now() - timestamp;

//     if (last < wait && last >= 0) {
//       timeout = setTimeout(later, wait - last);
//     } else {
//       timeout = null;
//       if (!immediate) {
//         result = func.apply(context, args);
//         if (!timeout) context = args = null;
//       }
//     }
//   };

//   return function () {
//     context = this;
//     args = arguments;
//     timestamp = _now();
//     const callNow = immediate && !timeout;
//     if (!timeout) {
//       timeout = setTimeout(later, wait);
//     }
//     if (callNow) {
//       result = func.apply(context, args);
//       context = args = null;
//     }

//     return result;
//   };
// };


// document.querySelector('.throttle').addEventListener('click', throttle(function(){
// 	console.log('click event trigger')
// }, 1000))

// document.querySelector('.debounce').addEventListener('click', debounce(function(){
// 	console.log('click event trigger')
// }, 500))


// 测试微任务和宏任务

console.log('1');

setTimeout(() => {
  console.log('2');
})

new Promise((resolve, reject) => {
  console.log('3');
  resolve('foo')
  console.log('4');
}).then(() => {
  console.log('5');
  new Promise((resolve, reject) => {
    console.log('6');
    setTimeout(() => {
      console.log('7');
      resolve('执行');
    })
    console.log('8');
  }).then(() => {
    console.log('9');
    setTimeout(() => {
      console.log('9-2');
    });
  });
  setTimeout(() => {
    console.log('10');
  });
});

setTimeout(() => {
  console.log('11');
  new Promise((resolve, reject) => {
    console.log('12');
    resolve('foo')
    console.log('13');
  }).then(() => {
    console.log('14');
  });
  setTimeout(() => {
    console.log('14-2');
  });
});

setTimeout(() => {
  console.log('15');
});
