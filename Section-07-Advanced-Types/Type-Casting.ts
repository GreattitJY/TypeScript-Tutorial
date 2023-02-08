let input = document.querySelector('input[type="text"]') as HTMLInputElement;

console.log(input.value);
input.value = "123";

let enteredText = (input as HTMLInputElement).value;

console.log(enteredText);

input = <HTMLInputElement>document.querySelector('input[type="text"]');

console.log(input.value);
