function pipe() {
  var tmp = arguments[0];
  for(var i = 1; i < arguments.length; i++) {
  tmp = arguments[i](tmp);
  }
  return tmp;
}

function addOne(x) {
  return x + 1;
}
pipe(1, addOne, addOne, addOne);