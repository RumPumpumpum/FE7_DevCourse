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

// 3번
{
  // 함수 정의
  const multiplyArrays: (arr1: number[], arr2: number[]) => number[] = (
    arr1,
    arr2
  ) => {
    const len = Math.min(arr1.length, arr2.length);
    const answer = [];
    for (let i = 0; i < len; i++) {
      answer.push(arr1[i]! * arr2[i]!);
    }
    return answer;
  };

  // 함수 호출
  const result = multiplyArrays([1, 2, 3], [4, 5, 6]);
  console.log(result); // [4, 10, 18]

  const result2 = multiplyArrays([1, 2], [4, 5, 6]);
  console.log(result2); // [4, 10]
}

// 4번
// 함수 정의
{
  const intersection: (arr1: number[], arr2: number[]) => number[] = (
    arr1,
    arr2
  ) => {
    return arr1.filter((value) => arr2.includes(value));
  };
  // 함수 호출
  const result = intersection([1, 2, 3], [2, 3, 4]);
  console.log(result); // [2, 3]
}

// 5번
{
  // 함수 정의
  const formatInfo = (user: { name?: string; age?: number }): string => {
    if (user.name !== undefined) return `Name: ${user.name}`;
    else if (user.age !== undefined) return `age: ${user.age}`;
    else return "No information";
  };

  // 함수 호출
  const info = formatInfo({ name: "Alice" });
  console.log(info); // "Name: Alice"
}

// 6번
{
  // 함수 정의
  const combineStrings = (str1: string, str2: string): string => {
    return str1 + str2;
  };

  // 함수 호출
  const combined = combineStrings("Hello", "World");
  console.log(combined); // "HelloWorld"
}

// 7번
{
  // 함수 정의
  const squareArray = (arr: number[]): number[] => {
    return arr.map((num) => num ** 2);
  };

  // 함수 호출
  const result = squareArray([1, 2, 3, 4]);
  console.log(result); // [1, 4, 9, 16]
}

// 8번
{
  // 함수 정의
  const addStringAndNumber = (str: string, num: number): string => {
    return str + num;
  };

  // 함수 호출
  const result = addStringAndNumber("The number is ", 10);
  console.log(result); // "The number is 10"
}

// 9번
{
  // 함수 정의
  const compareValues = (num: number, str: string): string => {
    if (num > str.length) return "Number is larger";
    else if (num < str.length) return "String is longer";
    else return "Equal length";
  };

  // 함수 호출
  const result = compareValues(10, "Hello");
  console.log(result); // "Number is larger"
}

// 10번
{
  // 함수 정의
  const checkValue = (value: number | string | boolean): string => {
    if (typeof value === "number") return "It's a number";
    else if (typeof value === "string") return "It's a string";
    else if (typeof value === "boolean") return "It's a boolean";
    else return "?";
  };

  // 함수 호출
  const result = checkValue(true);
  console.log(result);
}
