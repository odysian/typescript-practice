"use strict";
const greetUser = (user) => {
    return user.age ? `Welcome!\nuser#: ${user.id}\nname: ${user.name}\n${user.email}\n${user.age}` : `Welcome!\nuser #: ${user.id}\nname: ${user.name}\n${user.email}`;
};
const chris = {
    id: 1,
    name: "Chris",
    email: "test@test.com",
    age: 35
};
console.log("=== Greet User ===");
console.log(greetUser(chris));
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Desktop", price: 2000 },
    { id: 3, name: "Keyboard", price: 50 }
];
const getTotalPrice = (products) => {
    return products.reduce((sum, curr) => sum + curr.price, 0);
};
console.log("=== Total Price of Products ===");
console.log(getTotalPrice(products));
const user = {
    id: 1,
    name: "Chris",
    address: {
        street: "Tollis",
        city: "Broadview",
        zipCode: "44147"
    }
};
const getUserAddress = (user) => {
    return `${user.address.street}\n${user.address.city}\n${user.address.zipCode}\n${user.id}\n${user.name}`;
};
console.log("=== User with Address ===");
console.log(getUserAddress(user));
const config = {
    apiUrl: "https://example.com",
    timeout: 60
};
;
;
const myDog = {
    name: "Rex",
    age: 5,
    breed: "Greyhound",
    bark: () => "Woof"
};
console.log(myDog.bark());
