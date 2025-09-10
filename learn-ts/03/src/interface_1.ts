// 1번
{
  interface Person {
    name: string;
    age: number;
  }

  const person: Person = {
    name: "jiho",
    age: 27,
  };
}

// 2번
{
  interface Car {
    brand: string;
    model: string;
    start(): void;
  }

  const guabang: Car = {
    brand: "a",
    model: "b",
    start() {
      console.log("부아아앙");
    },
  };
}

// 3번
{
  interface Employee {
    name: string;
    position: string;
    department?: string;
  }

  const employee: Employee = {
    name: "a",
    position: "b",
  };
}

// 4번
{
  interface Team {
    name: string;
    members: string[];
  }

  const team: Team = {
    name: "a",
    members: ["a", "b"],
  };
}

// 5번
{
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    breed(): void;
  }

  const chiwawa = {
    name: "a",
    age: 1,
    breed() {
      console.log("낳음");
    },
  };

  chiwawa.breed();
}

// 6번
{
  interface Person {
    name: string;
    age: number;
    greet(): string;
  }
  const man: Person = {
    name: "man",
    age: 1,
    greet() {
      return `Hello, my name is ${this.name}`;
    },
  };

  console.log(man.greet());
}

// 7번
{
  interface Shape {
    area(): void;
  }

  interface Circle extends Shape {
    radius: number;
  }

  interface Rectangle extends Shape {
    width: number;
    height: number;
  }

  const cir: Circle = {
    radius: 10,
    area() {
      console.log(this.radius ** 2 * Math.PI);
    },
  };

  const rec: Rectangle = {
    width: 10,
    height: 20,
    area() {
      // area(this. Circle) { 뜻: 이 함수는 Circle 타입 객체에서만 호출되어야 한다.
      console.log(this.width * this.height);
    },
  };

  cir.area();
  rec.area();
}

// 8번
{
  interface Person {
    name: string;
    age: number;
  }

  interface Address {
    street: string;
    city: string;
    zipcode: number;
  }

  interface Contact extends Person, Address {}

  const profile: Contact = {
    name: "man",
    age: 12,
    street: "a",
    city: "b",
    zipcode: 5555,
  };
}

// 9번
{
  interface Dictionary {
    [key: string]: string; // 인덱스 시그니처, 값이 문자열이기만 하면 다 들어감
  }

  const man: Dictionary = {
    name: "jiho",
    nickname: "jihoho",
  };
}

// 10번
{
  interface Operation {
    (a: number, b: number): number; // 함수도 객체! (일급객체)

    ////
    name: string;
    length: number;
    //// 왜 되는가?
    // 함수 안에는 보이지 않지만 name과 length 속성이 있다.
    // 따라서 함수 내부의 name과 length 속성을 인식한 것
  }

  const add: Operation = (a, b) => a + b;
  const subtract: Operation = (a, b) => a - b;

  console.log(add(1, 2));
  console.log(subtract(1, 2));
}
