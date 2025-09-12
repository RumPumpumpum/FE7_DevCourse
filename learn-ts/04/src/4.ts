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

  /* 2. 접근 제어자 (public, private, protected, readonly)
        ㄴ 2-1. public - 누구나 접근 가능(인스턴스 외부, 클래스 내부, 상속 클래스 등등), 생략 public
        ㄴ 2-2. private - 클래스 내부에서만 접근 가능(외부x, 상속x)
        ㄴ 2-3. protected - 클래스 외부에서만 접근 불가능, (클래스 내부o, 상속o)
  */
}
