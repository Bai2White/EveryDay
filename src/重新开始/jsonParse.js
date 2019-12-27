function jsonEscape(str)  {
  return str.replace(/\n/g, "\\\\n").replace(/\r/g, "\\\\r").replace(/\t/g, "\\\\t");
}

var data = '{"count" : 1, "stack" : "sometext\n\n"}';
console.log(jsonEscape(data));
var dataObj = JSON.parse(jsonEscape(data));
console.log(dataObj.stack);
