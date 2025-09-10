{
  // class
  // JS의 클래스와 뭐가 다른가?

  // 1. 타입 시스템이 추가되었음
  class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(): string {
      return `Hello, ${this.name}`;
    }
  }
  const person = new User("jiho", 20);
  console.log(person.greet());
}
