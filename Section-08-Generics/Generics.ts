function getRandomNumberElement(items: number[]): number {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

let numbers = [1, 5, 3, 8, 4, 9];
let randomEle = getRandomElement<number>(numbers);
console.log(randomEle);

let returnEle: string;
let strings = ["abc", "test"];
returnEle = getRandomElement(strings);

function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}

let result = merge({ name: "John" }, { jobTitle: "Frontend Developer" });

console.log(result);
