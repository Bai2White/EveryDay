// Function.prototype.method = function(name, func) {
//   this.prototype[name] = func;
//   return this;
// }
// Number.method('integer', function() {
//   return Math[this < 0 ? 'ceil' : 'floor'](this);
// });
// console.log((10/3 ).integer());
// var hanoi = function(n, towerA, towerB, towerC) {
//   if(n > 0) {
//     hanoi(n - 1, towerA, towerC, towerB);
//     console.log('Move n' + n + ' from ' + towerA + ' to ' + towerC);
//     hanoi(n - 1, towerB, towerA, towerC);
//   }
// }
// hanoi(3, 'towerA', 'towerB', 'towerC');
// function quickSort(arr) {
//   if(arr.length <=1) {
//     return arr;
//   }
//   var mNumIndex = Math.floor(arr.length/2);
//   var mNum = arr.splice(mNumIndex, 1)[0];
//   var left = [];
//   var right = [];
//   for(var i = 0; i < arr.length; i++) {
//     if(arr[i] < mNum) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   console.log('left', left);
//   console.log('right', right);
//   return quickSort(left).concat([mNum], quickSort(right));
// }
// console.log(quickSort([2,3,3,3,4,8,4,9,9,92,23,4,32,3,4,42,23,432,2]));
// function insertSort(arr) {
//   let length = arr.length;
//   for(let i = 1; i < length; i++) {
//     let temp = arr[i];
//     for(let j = i; j > 0; j--) {
//       if(arr[j] >= arr[j-1]) {
//         break;      // 当前考察的数大于前一个数，证明有序，退出循环
//       }
//       arr[j] = arr[j-1]; // 将前一个数复制到后一个数上
//     }
//     arr[j] = temp;  // 找到考察的数应处于的位置
//   }
//   return arr;
// }
// console.log(insertSort([2,3,3,3,4,8,4,9,9,92,23,4,32,3,4,42,23,432,2]));

// function insertSort(arr) {
//   let length = arr.length;
//   for(let i = 1; i < length; i++) {
//     let temp = arr[i];
//     let j = i;
//     for(; j > 0; j--) {
//       if(temp >= arr[j-1]) {
//         break;      // 当前考察的数大于前一个数，证明有序，退出循环
//       }
//       arr[j] = arr[j-1]; // 将前一个数复制到后一个数上
//     }
//     console.log(j);
//     // arr[j] = temp;  // 找到考察的数应处于的位置
//   }
//   return arr;
// }

// // example
// let arr = [2,5,10,7,10,32,90,9,11,1,0,10]
// console.log(insertSort(arr));


// 插入排序
// function insertSort(arr) {
//   var len = arr.length;
//   for (var i = 1; i < len; i++) {
//     var temp = arr[i];
//     var j = i;
//     for( ; j > 0 ;j--) {
//       if(arr[j - 1] <= temp) break;
//       console.log('内部',j);
//       arr[j] = arr[j - 1];
//     }
//     arr[j] = temp;
//   }
//   return arr;
// }
// console.log(insertSort([4,3,2]));

//

// var walk_the_DOM = function walk(node, func) {
//   func(node);
//   node = node.firstChild;
//   while (node) {
//     walk(node, func);
//     node = node.nextSibling;
//   }
// };
// var getElementsByAttribute = function (att, value) {
//   var results = [];

//   walk_the_DOM(document.body, function (node) {
//     var actual = node.nodeType === 1 && node.getAttribute(att);
//     if (typeof actual === 'string' &&
//       (actual === value || typeof value !== 'string')) {
//       results.push(node);
//     }
//   });
//   return results;
// }
// getElementsByAttribute('value');

// "use strict";
// if (test) {
//    // Error
//    function functionThree() { doSomething(); }
// // }
// console.log(1);
// setTimeout(function(){
//     console.log(2);
//     Promise.resolve(1).then(function(){
//         console.log('promise1')

//         setTimeout(function(){
//             console.log(3)
//             Promise.resolve(1).then(function(){
//                 console.log('promise2')
//             })
//         },1)

//     })
// }, 1000)
// setInterval(function() {
//    setTimeout(function() {
//       console.log('内部和外部谁先触发2');
//    }, 0)
//    console.log('内部和外部谁先触发');
// },100);
// function Foo() {
//     this.age = 14;
// }

// var foo1 = new Foo();
// console.log(foo1.__proto__.__proto__.__proto__);

// 执行上下文
// 全局执行上下文 函数执行上下文 eval执行上下文
// 执行栈（调用栈call-stack）LIFO（后进先出）
// 全局执行上下文
GlobalExectionContext = {
    // this绑定
    ThisBinding = <this value>; // window or undefined
    // 词法环境
    LexicalEnvironment = {
        // 环境记录器两种类型 type declarative声明式-存储变量、函数和参数
        EnvironmentRecord: {
            type: 'Object', // </this>在全局环境中，环境记录器是对象环境记录器。
            // 绑定标识符
        },
        outer: null
    };
    // 变量环境
    VariableEnvironment = { ... };
}
FunctionExectionContext = {
    ThisBinding = Global || call Object;
    LexicalEnvironment = {
        EnvironmentRecord: {
            type: 'declarative' // 环境记录器是声明式环境记录器。
        },
        outer: Global or outer function environment reference
    }
}
