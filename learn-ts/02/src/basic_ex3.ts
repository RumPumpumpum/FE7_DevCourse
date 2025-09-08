// 연습문제 플러스플러스 2
{
  let dataset: [
    { id: number; value: string },
    { id: number; value: string }
  ][] = [
    [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
    ],
    [
      { id: 3, value: "c" },
      { id: 4, value: "d" },
    ],
    [
      { id: 5, value: "e" },
      { id: 6, value: "f" },
    ],
  ];
}

// 플러스플러스 3
{
  let mixedData: [
    { type: string; name: string; age: number },
    { type: string; name: string; age: number },
    { type: string; id: number; name: string; price: number },
    { type: string; id: number; name: string; price: number }
  ] = [
    { type: "user", name: "Alice", age: 30 },
    { type: "user", name: "Bob", age: 25 },
    { type: "product", id: 1, name: "Laptop", price: 999 },
    { type: "product", id: 2, name: "Smartphone", price: 499 },
  ];
}

// 플러스플러스 4
{
  let dataSet: [
    { name: string; price: number },
    [string, number],
    { name: string; price: number },
    [string, number]
  ] = [
    { name: "Item A", price: 100 },
    ["item1", 50],
    { name: "Item B", price: 200 },
    ["item2", 75],
  ];
}

// 플러스 플러스5
{
  let complexStructure: {
    id: number;
    value: string;
    attributes: { weight: number; color: string };
  };
  [] = [
    { id: 1, value: "apple", attributes: { weight: 1.2, color: "green" } },
    { id: 2, value: "banana", attributes: { weight: 0.5, color: "yellow" } },
    { id: 3, value: "cherry", attributes: { weight: 0.2, color: "red" } },
  ];
}

// 플러스 플러스 6
{
  let nestedData = [
    { id: 1, tags: ["fruit", "sweet"], name: "apple" },
    { id: 2, tags: ["fruit", "tropical"], name: "mango" },
    { id: 3, tags: ["fruit", "berry"], name: "strawberry" },
  ];
}

// 플러스 플러스 7
{
  let profile: {
    name: string;
    age: number;
    favorites: [string, number, boolean, number];
    address: {
      street: string;
      city: string;
    };
  } = {
    name: "Alice",
    age: 28,
    favorites: ["reading", 42, true, 99.9],
    address: {
      street: "123 Main St",
      city: "Metropolis",
    },
  };
}

// 플러스 플러스 8
{
  let userData: { user: { name: string; age: number }; status: string };
  [] = [
    { user: { name: "John", age: 32 }, status: "active" },
    { user: { name: "Doe", age: 28 }, status: "inactive" },
    { user: { name: "Jane", age: 35 }, status: "active" },
  ];
}

// 플러스 플러스 9
{
  let collection: [
    { id: number; name: string; price: number },
    [string, number]
  ];
  [] = [
    { id: 1, name: "Item 1", price: 100 },
    ["Discount", 20],
    { id: 2, name: "Item 2", price: 200 },
    ["Discount", 10],
  ];
}

// 플러스 플러스 10
{
  let mixedItems: { id: number; type: string; name: string; size: string }[] = [
    { id: 1, type: "food", name: "Pizza", size: "Large" },
    { id: 2, type: "drink", name: "Coke", size: "Medium" },
    { id: 3, type: "food", name: "Burger", size: "Small" },
  ];
}
