{
  // 클래스에서 제네릭과 임플리먼츠가 같이 사용된 경우에는?
  interface Repository<T> {
    add(item: T): void;
    get(id: number): T | undefined;
  }

  class InMemoryRepository<T> implements Repository<T> {
    private items: T[] = [];
    add(item: T): void {
      this.items.push(item);
    }
    get(id: number): T | undefined {
      return this.items[id];
    }
  }

  interface User {
    id: number;
    name: string;
  }
  const userRepository = new InMemoryRepository<User>();
  userRepository.add({ id: 1, name: "kim" });
  console.log(userRepository.get(1));
}
