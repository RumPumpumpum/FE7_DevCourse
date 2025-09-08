// 1번
// 함수 정의
const sumAllNumbers: (...arrays: number[][]) => number[] = (...arrays) =>
  arrays.map((arr) => arr.reduce((a, c) => a + c, 0));

// 함수 호출
const result = sumAllNumbers([1, 2], [3, 4, 5], [6, 7]);
console.log(result); // [3, 12, 13]

// 2번
{
  // 함수 정의
  const doubleValue: (x: number | string) => number = (x) => {
    if (typeof x === "number") return x * 2;
    else if (typeof x === "string") return x.length * 2;
    throw new Error("Invalid type");
  };

  // 함수 호출
  const result1 = doubleValue(5);
  const result2 = doubleValue("hello");
  console.log(result1); // 10
  console.log(result2); // 10
}
