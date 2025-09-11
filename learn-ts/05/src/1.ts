{
  // 클래스
  /*
        JS에 비해서 TS 클래스가 달라진 점?
        1.  타입 시스템이 제공된다는 점
        2. 접근 제한자가 지원된다는 점
            ㄴ public, protected, private, readonly
            ㄴ #private가 추가되었지만, 이거랑 다른 것
        3. 추상클래스, 인터페이스와 결합이 가능하다는 것
    */

  class Car {
    speed: number;
    constructor(speed: number) {
      this.speed = speed;
    }

    start(name: string): string {
      return `${name}, start!`;
    }
  }

  const benz = new Car(100);
  console.log(benz.speed);
  console.log(benz.start("benz"));
}

{
  class Car {
    // public - 기본값, 클래스 내/외부/상속에서 접근 가능하게 합니다.
    // private - 클래스 내부에서만 접근 가능
    // protected - 클래스 내부/상속에서 접근 가능
    public speed: number; // 접근 제어자
    constructor(speed: number) {
      this.speed = speed;
    }

    private secret(): string {
      // 내부에서만 호츌 가능
      return "차 사고 크게 난 적 있음...";
    }

    search() {
      return this.secret();
    }
  }

  const car = new Car(100);
  console.log(car.speed);
  console.log(car.search()); // private 함수에 public 함수를 통해 접근
}

{
  class Car {
    private engineOn: boolean = false;
    // 엔진 시작
    start() {
      if (this.engineOn) {
        console.log("Engine is alreay started");
      }
      this.engineOn = true;
      console.log("Engine Started");
    }
    // 엔진 정지
    stop() {
      this.engineOn = false;
      console.log("Engine Stopped");
    }
    // 엔진 상태
    isEngineOn() {
      return this.engineOn;
    }
  }

  const benz = new Car();
  // benz.engineOn = true  접근 불가능
  benz.start();
  benz.start();
  benz.stop();
  benz.stop();
  benz.isEngineOn();
  console.log(benz.isEngineOn);
}

{
  class Car {
    // public - 기본값, 클래스 내/외부/상속에서 접근 가능하게 합니다.
    protected speed: number; // 접근 제어자
    constructor(speed: number) {
      this.speed = speed;
    }
  }

  class Benz extends Car {
    // 생성자에 추가할 점이 없다면, constructor를 선언하고 super를 하지 않아도 됨
    showSpeed() {
      console.log(this.speed); // private로 선언했다면, 상속으로도 접근 불가능
    }
  }
  const benz = new Benz(100);
  benz.showSpeed();
}

{
  class Character {
    protected hp: number = 100; // 상속으로 접근 가능
    readonly gender = "male";
  }

  class Warrior extends Character {
    attack() {
      this.hp -= 10;
      console.log(`HP after attack: ${this.hp}`);
    }
    displayWarriorInfo() {
      console.log(`Warrior HP: ${this.hp}`);
      //   warrior.gender = "female"  : 값의 수정을 불가능 하게 하는 readonly가 있어서 수정 불가
    }
  }
  const warrior = new Warrior();
  warrior.displayWarriorInfo();
  warrior.attack();
  //   warrior.gender = "female"  : 값의 수정을 불가능 하게 하는 readonly가 있어서 수정 불가

  // readonly : 한 번 값이 할당되면 수정 불가
}

{
  // 메소드 오버라이딩
  class Car {
    speed: number; // 접근 제어자
    constructor(speed: number) {
      this.speed = speed;
    }
    getSpeed(): string {
      return `Car: ${this.speed}`;
    }
  }

  class Benz extends Car {
    name: string;
    constructor(speed: number, name: string) {
      // 메소드 오버라이딩
      super(speed);
      this.name = name;
    }

    // getSpeed(): number {  안됨! 부모가 가지고 있는 반환값도 똑같이 가져와야 함
    //   return this.speed;
    // }
  }
}

{
  // 추상 클래스
  // 직접 인스턴스를 생설할 수 없는 클래스,
  // 주로 공통의 속성이나 메서드를 정의하기 위해서 사용 (직접 구현도 가능)
  abstract class Animal {
    inEarth: boolean = true; // 직접 구현도 가능
    abstract makeSound(): void;
  }
  // const animal = new Animal(); abstact 클래스는 인스턴스로 사용할 수 없다!

  class Dog extends Animal {
    // 추상 클래스에 있는 요소를 정의하지 않으면 에러가 난다
    // 즉, 구현의 의무가 생긴다!
    makeSound(): void {
      console.log("멍멍");
    }
  }

  const dog = new Dog();
  dog.makeSound();
  console.log(dog); // Dog { inEarth: true } 직접 구현한 내용도 들어가있음
  /*
    추상 클래스는 미완성된 설계도
    이 클래스 자체로는 인스턴스를 만들 수 없고, 
    반드시 자식 클래스가 이 클래스를 상속받아 미완성된 부분을 완성해야만 사용 가능

    단점: 다른 클래스를 추가 상속하지 못한다.
  */
}

{
  // implements + interface(type)
  // 추상 클래스와 차이점이 뭐지?
  // 추상 클래스는 직접 구현이 가능한데,
  // 인터페이스는 타입 지정 용도라서 직접 구현이 불가능
  // 하지만, 여러개를 implements 가능!
  interface Runner {
    run(): void;
  }
  interface Swimmer {
    swim(): void;
  }

  class Person implements Runner, Swimmer {
    // implements : 구현 의무
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    run() {
      console.log("Person is Run!");
    }
    swim() {
      console.log("Person is Swim!");
    }
  }
}

{
  // abstract
  // - 상속의 개념을 그대로 활용하면서 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 가능)
  // implements
  // - 상속과 별개로 공통의 속성이나 메서드를 구현하고 싶을 때 (직접 구현 불가능)
  // - implements는 타입 별칭을 써도 되지만, 인터페이스를 쓰는게 관례
}
