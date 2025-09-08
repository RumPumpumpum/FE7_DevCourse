// 1번
{
  // 함수 정의
  const add = (a: number, b: number): number => a + b;

  // 함수 호출
  const result = add(10, 5);
  console.log(result); // 15
}

// 2번
{
  const greet = (name: string): string => `Hello, ${name}!`;
  const greeting = greet("Alice");
  console.log(greeting); // "Hello, Alice!"
}

// 3번
{
  const sumAll = (...numbers: number[]): number =>
    numbers.reduce((acc, cur) => acc + cur, 0);

  // 함수 호출
  const total = sumAll(1, 2, 3, 4);
  console.log(total); // 10
}

// 4번
{
  // 함수 정의
  const sum = (num1: number, num2 = 0): number => num1 + num2;

  // 함수 호출
  const result = sum(5);
  console.log(result); // 5
}

// 5번
{
  // 함수 정의
  const multiply = (num1: number, num2: number): number => num1 * num2;

  // 함수 호출
  const product = multiply(4, 5);
  console.log(product); // 20
}

// 6번
{
  // 함수 정의
  {
    const concatStringAndNumber = (str: string, num: number): string =>
      str + num;

    // 함수 호출
    const result = concatStringAndNumber("Hello", 10);
    console.log(result); // "Hello10"
  }
}

// 7번
{
  // 함수 정의
  const greet = (name: string, greeting: string = "Welcome"): string =>
    `${name}, ${greeting}!`;
  // 함수 호출
  const greeting1 = greet("Alice", "Hello");
  const greeting2 = greet("Bob");
  console.log(greeting1); // "Hello, Alice!"
  console.log(greeting2); // "Welcome, Bob!"
}

// 8번
{
  // 함수 정의
  const findMax = (numbers: number[]): number => Math.max(...numbers);

  // 함수 호출
  const max = findMax([10, 20, 30, 40]);
  console.log(max); // 40
}

// 9번
{
  // 함수 정의
  const double = (num: number): number => num * 2;

  // 함수 호출
  const doubled = double(10);
  console.log(doubled); // 20
}
