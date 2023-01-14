# Why TypeScript

- TypeScript adds a type system to help you avoid many problems with dynamic types in JavaScript.

- TypeScript implements the futureso of JavaScript a.k.a ES Next so that you can use them today.

<hr>

## Understanding dynamic type in JavaScript

As you can see, as soon as the value is assigned, the type of the variable chages.

```js
let box;
console.log(typeof box); // undefined

box = "hello";
console.log(typeof box); // string

box = 100;
console.log(typeof box); // number
```

Suppose you have a function that returns a `product` object based on an id:

```js
function getProduct(id) {
  return {
    id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}
```

The following uses the getProduct() function to relative the producrt with id 1 and show its data:

```js
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);
```

Output:

```js
The product undefined coasts $99.5
```

The issue with this code is that the `product` object doesn't have the `Name` property. it has the `name` property with the first letter `n` in lowercase.

However, you can only know it untill you run the script.

The following exaple defines a new function that outputs the product information to the Console:

```js
const showProduct = (name, price) => {
  console.log(`The product ${name} costs $${price}`);
};
```

And the following uses the `getProduct()` and `showProduct()` functions:

```js
const product = getProduct(1);
showProduct(product.price, product.name);
```

Output:

```js
The Product 99.5 costs $Awesome Gadget 1
```

## How Typescript solves the problems of dynamic types

First, define the "shape" of the `product` object using an interface.

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}
```

Second, explicitly use the `Product` type as the return type of the `getProduct()` function:

```ts
function getProduct(id): Product {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 99.5,
  };
}
```

When you reference a prorperty that doesn't exist, the code editor will inform you immediately:

```ts
const product = getProduct(1);
console.log(`The product ${product.Name} costs $${product.price}`);
```

The code editor highlighted the following error on the `Name` property.

And when you hover the mouse cursor on the error, you'll see a hin that helps you to solve the issue:

```
any
Property 'Name' does not exist on type 'Product'. Did you mean 'name'?

`input.tsx(3, 5)`: 'name' is declared here.
```

To solve the problem of passing the arguments in the wrong order, you explicitly assign types to function parameters:

```ts
const showProduct = (name: string, prcie: number) => {
  console.log(`The product ${name} costs $${price}.`);
};
```

And when you pass the arguments of the wrong types to the `showProduct()` function, you'll receive an error:

```ts
const product = getProduct(1);
showProduct(product.price, product.name);
```

```
(property) Product.price: number
Arguments of type 'number' is not assingable to parameter of the string.
```
