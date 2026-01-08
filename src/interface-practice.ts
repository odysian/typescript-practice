// Interface with optional
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

const greetUser = (user: User): string => {
  return user.age ? `Welcome!\nuser#: ${user.id}\nname: ${user.name}\n${user.email}\n${user.age}` : `Welcome!\nuser #: ${user.id}\nname: ${user.name}\n${user.email}`
};

const chris: User = {
  id: 1,
  name: "Chris",
  email: "test@test.com",
  age: 35
};
console.log("=== Greet User ===")
console.log(greetUser(chris));

// Interface array
interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Desktop", price: 2000},
  { id: 3, name: "Keyboard", price: 50}
];

const getTotalPrice = (products: Product[]): number => {
  return products.reduce((sum, curr) => sum + curr.price, 0)
}
console.log("=== Total Price of Products ===")
console.log(getTotalPrice(products));


// Nested interface
interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface UserWithAddress {
  id: number;
  name: string;
  address: Address;
}

const user: UserWithAddress = {
  id: 1,
  name: "Chris",
  address: {
    street: "Tollis",
    city: "Broadview",
    zipCode: "44147"
  }
};

const getUserAddress = (user: UserWithAddress): string => {
  return `${user.address.street}\n${user.address.city}\n${user.address.zipCode}\n${user.id}\n${user.name}`
};

console.log("=== User with Address ===")
console.log(getUserAddress(user));

// Readonly Properties
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}

const config: Config = {
  apiUrl: "https://example.com",
  timeout: 60
};

// config.apiUrl = "new url" DOESNT WORK BECAUSE READ ONLY

interface Animal {
  name: string;
  age: number;
};

interface Dog extends Animal {
  breed: string;
  bark: () => string;
};


const myDog: Dog = {
  name: "Rex",
  age: 5,
  breed: "Greyhound",
  bark: () => "Woof"
};

console.log(myDog.bark());