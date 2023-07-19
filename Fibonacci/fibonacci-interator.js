function fibonacci(range) {
  const arr = [];
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i < range; i++) {
    arr.push(c);
    a = b;
    b = c;
    c = a + b;
  }
  return arr;
}
