// 1번
{
  type Person = {
    name: string;
    age: number;
  };
  const getPersonInfo = (person: Person): string => {
    return `이름: ${person.name}, 나이: ${person.age}`;
  };

  const person1: Person = { name: "jiho", age: 20 };
  console.log(getPersonInfo(person1));
}

// 2번
{
  type Config = {
    host: string;
    port: number;
    ssl: boolean;
  };
  const createConfig = (host: string, port: number, ssl: boolean): Config => {
    return { host, port, ssl };
  };

  const config = createConfig("localhost", 8080, true);
  console.log(config); // { host: 'localhost', port: 8080, ssl: true }
}

// 3번
{
  type Rectangle = {
    width: number;
    height: number;
  };

  const calculateArea = (rectangle: Rectangle): number => {
    return rectangle.height * rectangle.width;
  };
  const rect1: Rectangle = {
    width: 10,
    height: 20,
  };
  console.log(calculateArea(rect1));
}

// 4번
{
  type Student = {
    name: string;
    age: number;
    grades: number[];
  };
  const calculateAverageGrade = (student: Student): number => {
    const totalGrade = student.grades.reduce((a, c) => a + c, 0);
    const answer = totalGrade / student.grades.length;
    return answer;
  };
  console.log(
    calculateAverageGrade({
      name: "jiho",
      age: 20,
      grades: [10, 20, 30, 40, 50],
    })
  );
}

// 5번
{
  type Response = {
    status: string;
    data: string;
    message: string;
  };

  const createResponse = (
    status: string,
    data: string,
    message: string
  ): Response => {
    const answer: Response = { status, data, message };
    return answer;
  };

  console.log(createResponse("success", "John", "fetch success"));
  // { status: 'success', data: 'John', message: 'fetch success'
}

// 6번
{
  type Employee = {
    id: string;
    name: string;
    position: string;
  };
  const getEmployeeInfo = (employee: Employee): string => {
    return `${employee.name} works as a ${employee.position} with ID: ${employee.id}.`;
  };

  console.log(
    getEmployeeInfo({ id: "1", name: "james", position: "developer" })
  );
  // "james works as a developer with ID: 1."
}

// 7번
{
  type Circle = {
    radius: number;
  };

  const calculateCircumference = (circle: Circle): number => {
    return circle.radius * 2 * Math.PI;
  };
  console.log(calculateCircumference({ radius: 3 })); // 18.84955592153876
}

// 8번
{
  type Product = {
    name: string;
    price: number;
    inStock: boolean;
  };

  const getDiscountedPrice = (product: Product, discount: number): number => {
    return (product.price / 100) * (100 - discount);
  };

  console.log(
    getDiscountedPrice({ name: "bag", price: 1000, inStock: true }, 10)
  ); // 900
}

// 9번
{
  type Book = {
    title: string;
    author: string;
    publishedYear: number;
  };

  const getBookSummary = (book: Book): string => {
    return `${book.title} by ${book.author}, published in ${book.publishedYear}`;
  };

  console.log(
    getBookSummary({ title: "river", author: "james", publishedYear: 2020 })
  );
  // "river by james, published in 2020."
}

// 10번
{
  type Transaction = {
    id: string;
    amount: number;
    timestamp: string;
  };

  const isValidTransaction = (transaction: Transaction): boolean => {
    return transaction.amount > 0;
  };

  console.log(isValidTransaction({ id: "1", amount: 2, timestamp: "13:33" }));
}
