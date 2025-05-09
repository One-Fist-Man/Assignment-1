## TypeScript: any, unknown, never 
**🔍 any — The “I Don’t Care” Type**
* `any` is like that one friend who’s down for anything. Want to store a number in it? Go for it. A string? Sure. An object with a llama inside it? Still fine.
  
```ts
let myData: any = 5;
myData = "hello";
myData = { llama: true };
```
**Why it's risky:** TypeScript won’t check what you’re doing with any. So if you try to call a method that doesn’t exist, it won’t warn you. That means more chances of runtime errors (stuff breaking when the app is running).

**🕵️ unknown — The “I Care, But I Don’t Know Yet” Type**
* `unknown` is like the cautious sibling of `any`. It says, “I’ll accept anything, BUT I won’t let you use it unless you check what it is first.”

```ts
let mystery: unknown = "hello";

if (typeof mystery === "string") {
  console.log(mystery.toUpperCase()); 
}
```
**Why it’s better:** With `unknown`, TypeScript makes you check the type before using it. This keeps your code safer.

**🚫 never — The “This Should Never Happen” Type**
* `never` is used when a function can’t return anything. Like, ever. It's like a trapdoor — once you fall in, there's no coming back.
  
```ts
function crash(message: string): never {
  throw new Error(message); // this function never finishes
}
```
**Why it’s useful:** Helps you find logic errors when your code thinks there’s a case that should be impossible.

## 🧠 What is Type Inference?
Okay, so now you're like — "Do I have to write out types for everything?"

Nope! That’s where type inference comes in.

TypeScript is smart enough to guess the type of a variable based on how you use it.

```ts
let age = 16; // TypeScript knows this is a number
```
You didn’t tell it “this is a `number`,” but it figured it out on its own. That’s inference.

## 👍 Why Type Inference is Awesome
🧼 Less typing (literally)

🧠 Your code is cleaner

🛡️ Still gives you safety

🕵️ Helps you catch bugs early

```ts
let user = {
  name: "Alex",
  age: 17,
};

console.log(user.name.toUpperCase()); // Safe! TypeScript knows it’s a string
```
You didn’t tell it anything, but TypeScript already knows `user.name` is a string and lets you use string methods like `toUpperCase()`.
