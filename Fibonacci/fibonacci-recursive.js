function fibonacci(number) {
  return number === 1
    ? [0]
    : number === 2
    ? [0, 1]
    : [
        ...fibonacci(number - 1),
        fibonacci(number - 1)[number - 2] + fibonacci(number - 1)[number - 3],
      ];
}
