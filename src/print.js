// function Ninja() {
// 　this.skulk = function() {
// 　　 return this;
// 　};
// }　　

// var ninja1 = new Ninja();
// var ninja2 = new Ninja();　　
// console.log(ninja1.skulk() === ninja1);
// console.log(ninja2.skulk());
// var test2 = Ninja();
// console.log(test2);

// function juggle() {
//   var result = 0;
//   for(var i = 0;i <arguments.length; i++) {
//     result += arguments[i];
//   }
//   this.result = result;
// }
// var ninja1 = {};
// var ninja2 = {};
// juggle.apply(ninja1, [1,2,2,3]);
// juggle.call(ninja2, 1,2,3,4);
// console.log(ninja1.result);
// function forEach(list, callback) {
//   for(var i = 0; i < list.length; i++) {
//     callback.call(list[i], i);
//   }
// }
// var obj = [2
//   {type: 'obj1'},
//   {type: 'obj2'},
// ];

// forEach(obj, function(index){
//   console.log(this === obj[index]);
// });
var button = {
  x: 32,
  click: () => {
    console.log(this.x);
  }
}
button.click.bind(button)();
