// 1번
{
  const printValue = (value: string | number): string | number => {
    if (typeof value === "string") return value;
    else return value;
  };

  console.log(printValue("Hello")); // "Hello" 출력
  console.log(printValue(42)); // 42 출력
}

// 2번
{
  const doubleOrLength = (value: string | number): number => {
    if (typeof value === "string") return value.length;
    else return value * 2;
  };

  console.log(doubleOrLength("hello")); // 5 (문자열 "hello"의 길이)
  console.log(doubleOrLength(10)); // 20 (숫자 10의 두 배)
}

// 3번
{
  const mergeObjects = (
    person: { name: string; age: number },
    employee: { jobTitle: string; salary: number }
  ): { name: string; age: number } & { jobTitle: string; salary: number } => {
    return { ...person, ...employee };
  };

  const person = { name: "Alice", age: 30 };
  const employee = { jobTitle: "Engineer", salary: 5000 };

  const mergedObject = mergeObjects(person, employee);
  console.log(mergedObject);
  // 예상 출력: { name: "Alice", age: 30, jobTitle: "Engineer", salary: 5000 }
}

// 4번
{
  const getFirstElement = (
    arr: number[] | string[]
  ): number | string | undefined => {
    if (arr.length > 0) return arr[0];
    else return undefined;
  };

  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"
  console.log(getFirstElement([])); // undefined
}

// 5번
{
  const isEqual = (v1: string | number, v2: string | number): boolean => {
    if (v1 === v2) return true;
    else return false;
  };

  console.log(isEqual(10, 10)); // true
  console.log(isEqual("hello", "world")); // false
  console.log(isEqual(5, "5")); // false
}

// 6번
{
  const updateAddress = (
    obj: { name: string; age: number },
    str?: string
  ): { name: string; age: number; str?: string } => {
    if (str) return { ...obj, str };
    return obj;
  };

  const updatedPerson = updateAddress(
    { name: "Jane", age: 28 },
    "123 Maple St"
  );
  console.log(updatedPerson);
  // 예상 출력: { name: "Jane", age: 28, address: "123 Maple St" }

  const updatedPersonWithoutAddress = updateAddress({ name: "John", age: 22 });
  console.log(updatedPersonWithoutAddress);
  // 예상 출력: { name: "John", age: 22 }
}

// 7번
{
  const maxValue = (
    v1: number | string,
    v2: number | string
  ): number | string => {
    if (typeof v1 === "string" && typeof v2 === "string") {
      return v1.length >= v2.length ? v1 : v2;
    } else {
      return v1 > v2 ? v1 : v2;
    }
  };

  console.log(maxValue(10, 20)); // 20
  console.log(maxValue("apple", "banana")); // "banana"
  console.log(maxValue(30, 30)); // 30
  console.log(maxValue("cat", "dog")); // "dog"
}

// 8번
{
  // 함수 선언문으로 풀어주세요 (함수 오버로딩은 함수 선언문만 가능)
  function getValue(value: number): string;
  function getValue(value: string): string;
  function getValue(value: string | number): string {
    return value.toString();
  }

  console.log(getValue(123)); // "123"
  console.log(getValue("abc")); // "abc"
}

// 9번
{
  const createContact = (
    person: { name: string; age: number },
    concat: { email: string }
  ): { name: string; age: number } & { email: string } => {
    return { ...person, ...concat };
  };

  const person = { name: "Alice", age: 28 };
  const contact = { email: "alice@example.com" };

  const personWithContact = createContact(person, contact);
  console.log(personWithContact);
  // 예상 출력: { name: "Alice", age: 28, email: "alice@example.com" }
}

// 10번
{
  const getAge = (age: number | string): number => {
    if (typeof age === "string") return parseInt(age);
    return age;
  };

  console.log(getAge("25")); // 25
  console.log(getAge(30)); // 30
  console.log(getAge("abc")); // NaN
}
