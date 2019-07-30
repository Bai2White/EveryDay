// call apply bind区别
var obj = {
  name: 'xiaobai',
  sex: 'man',
  tell: function(n) {
    console.log(this.sex + n);
  }
};
var obj2 ={
  sex: 'hah'
};
obj.tell.call(obj2, 33);
obj.tell.apply(obj2, [22]);
obj.tell.bind(obj2)(22);
