function assert(value, desc) {
   var li = document.createElement("li");
   li.className = value ? "pass" : "fail";
   li.appendChild(document.createTextNode(desc));
   document.getElementById("results").appendChild(li);
  // console.assert(value, desc);
  // console.log(value, desc);
}
function report(text) {
  assert(true, text);
}
