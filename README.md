# learnJS

Getting started again with the JS now learning the basics starting with the ``async await`` thingi in js that allows the async functional programming, maybe i have used wrong termenology here but ok its just the start



---

### Behind the Scenes of the `new` Keyword in JavaScript

When you use the `new` keyword in JavaScript, several key steps occur behind the scenes that allow objects to be created and linked with constructors and prototypes. Here’s a breakdown of what happens:

---

1. **A New Object is Created**
   - When the `new` keyword is used, it first creates a new empty JavaScript object.
   - This new object will be the basis for any properties or methods added during the execution of the constructor.

   _Think of this step as an empty box being made, which will later be filled with properties and values from the constructor function._

---

2. **Prototype is Linked**
   - The newly created object is automatically linked to the constructor’s prototype. 
   - This linking means the object can inherit properties and methods from the constructor’s prototype.

   _This step establishes inheritance. Essentially, the new object will have access to methods and properties of the constructor via its prototype._

   - For example, if the constructor’s prototype has a method `sayHello()`, every object created with that constructor can access this method.

---

3. **Constructor Function is Called**
   - The constructor function (the function following the `new` keyword) is invoked, and the newly created object is passed in as the `this` value.
   - If the constructor has parameters, they will be initialized with the arguments passed during the object creation.
   
   _This is the step where the object is “customized” and populated with properties._

   - The object gets its unique properties defined within the constructor, typically using `this.propertyName = value;`.

---

4. **Return Value Handling**
   - If the constructor function explicitly returns an object (non-primitive value), that object is returned.
   - If no object is explicitly returned, JavaScript will automatically return the newly created object linked to the constructor.

   _This step ensures that either the custom return value or the automatically created object will be the result of the `new` operation._

---

### Example Code Explanation

```javascript
function Person(name, age) {
   this.name = name;
   this.age = age;
}

Person.prototype.sayHello = function() {
   return `Hello, my name is ${this.name}!`;
};

const person1 = new Person('John', 25);
```

- **Step 1:** A new empty object is created.
- **Step 2:** The object gets linked to `Person.prototype` so it can access `sayHello`.
- **Step 3:** The constructor `Person` is invoked, initializing `person1` with `name = 'John'` and `age = 25`.
- **Step 4:** Since no return value is provided, `person1` will be the new object created by the `new` operation.

### Key Points to Note:
- The `new` keyword is crucial in JavaScript for object creation and proper inheritance setup.
- If you don’t use `new` and just call the constructor directly, `this` will not refer to the newly created object, potentially leading to unexpected behavior.

### Useful Information for Developers:
- The `new` keyword sets up prototypal inheritance automatically.
- Using `new` helps ensure that objects are properly linked to constructor functions and inherit from the prototype.
- Always use `new` when invoking constructor functions, otherwise, the context (`this`) will be incorrectly assigned.

---



Here are shorter definitions for the key concepts:

1. **Prototype Inheritance**: 
   - A mechanism in JavaScript where objects inherit properties and methods from other objects. Objects can share functionality through a prototype chain.

2. **Custom Method Extension**:
   - Adding new methods to built-in objects like `Array`, `Object`, and `String` using their prototype, allowing enhanced functionality.

3. **Method Binding to Object Context**:
   - The use of the `this` keyword within an object’s method to refer to the object itself, allowing access to its properties and methods.

4. **Object Linking Through `__proto__`**:
   - A way to establish inheritance between objects, linking them together so they can share properties and methods through a prototype chain.

5. **Prototype Chain**:
   - A series of linked objects where properties and methods are inherited from one object to another, forming a chain of prototypes.

These brief definitions explain each concept while retaining clarity about their role in JavaScript.

# Project Name: Prototype and Inheritance Concepts in JavaScript

## Introduction

This project demonstrates key JavaScript concepts such as prototype inheritance, method extension, and working with object properties. It builds upon JavaScript’s built-in objects (like `Array`, `Object`, and `String`) and custom objects to show how prototype inheritance can extend functionality across various data structures. The aim of this prototype-based project is to enhance built-in types and create an inheritance hierarchy to demonstrate how properties and methods can be shared between different objects.

## Key Concepts Covered

1. **Prototype Inheritance**:
   - JavaScript uses prototypes for inheritance, meaning objects can inherit properties and methods from other objects. This project shows how one object can inherit properties from another using prototypes (`__proto__` or `Object.setPrototypeOf`).
   
2. **Custom Method Extension**:
   - Built-in types like `Array`, `Object`, and `String` are extended with custom methods using prototypes. These methods allow for adding new behaviors to existing objects without modifying the original JavaScript objects.

3. **Method Binding to Object Context**:
   - The project also demonstrates how methods can be defined within objects and how `this` keyword references the current context (the object in which the method is invoked).

4. **Object Linking Through `__proto__`**:
   - Inheritance between custom objects is achieved using the `__proto__` property to link objects together, allowing objects to inherit properties and methods from others in a prototype chain.

## Breakdown of Concepts in the Code

### 1. Extending Built-in Objects
The code shows how to extend the functionality of JavaScript's native types using prototypes:

- **String.prototype.trueLength**:
  Extends the `String` object to calculate and display the actual length of the string after removing any trailing whitespace using the `.trim()` method.
  
  ```js
  String.prototype.trueLength = function() {
      console.log(`${this}`);
      console.log(`True length is: ${this.trim().length}`);
  };
  ```

  This method is invoked on any string:
  ```js
  "exampleString".trueLength();
  ```

- **Array.prototype.heyHitesh**:
  Extends the `Array` object to include a custom method `heyHitesh` that logs a message to the console.

  ```js
  Array.prototype.heyHitesh = function() {
      console.log("Hitesh says hello");
  };
  ```

  This can be invoked on any array:
  ```js
  [1, 2, 3].heyHitesh();
  ```

### 2. Object Prototype Extension
Custom objects can have methods and properties that are shared with all instances through their prototype:

- **Object.prototype.hitesh**:
  Adds a method `hitesh` to the global `Object` prototype, meaning any object will have access to this method.
  
  ```js
  Object.prototype.hitesh = function() {
      console.log("hitesh is present in all objects");
  };
  ```

  This method can be called on any object:
  ```js
  let myObj = {};
  myObj.hitesh();  // Logs "hitesh is present in all objects"
  ```

### 3. Prototype Chain and Inheritance
The prototype chain is utilized to establish inheritance between objects. In the code, several objects are defined, each inheriting properties from others:

- **User Object**:
  ```js
  const User = {
      name: "chai",
      email: "chai@google.com"
  };
  ```

- **Teacher Object**:
  ```js
  const Teacher = {
      makeVideo: true
  };
  
  // Inherit from User
  Teacher.__proto__ = User;
  ```

  The `Teacher` object inherits properties from the `User` object, so it now has access to both `name`, `email`, and its own `makeVideo` property.

- **TeachingSupport Object**:
  Inheritance can also be achieved using the modern `Object.setPrototypeOf` method, which explicitly sets the prototype of an object.

  ```js
  const TeachingSupport = {
      isAvailable: false
  };
  
  Object.setPrototypeOf(TeachingSupport, Teacher);
  ```

  Now, `TeachingSupport` inherits both `makeVideo` from `Teacher` and `name`, `email` from `User`.

### 4. Method and Context with `this`
The method `getSpiderPower` inside the `heroPower` object demonstrates how the `this` keyword refers to the current object context when the method is called:

```js
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
};
```

When you call `heroPower.getSpiderPower()`, the `this` inside the function refers to `heroPower`, allowing access to the `spiderman` property.

## How the Prototype System Works
JavaScript’s prototype system allows objects to inherit methods and properties from other objects. By setting an object’s prototype (`__proto__` or `Object.setPrototypeOf()`), you allow it to use methods and properties from its parent. This allows for a flexible and reusable structure.

In this project:
- Custom methods are added to built-in objects like `String`, `Array`, and `Object`.
- Objects are linked together in a prototype chain to demonstrate inheritance and shared functionality.
- The `this` keyword is used within methods to access the context (the object on which the method was called).

## Conclusion
This project explores how JavaScript’s prototype inheritance system works and demonstrates how to extend built-in objects and create custom inheritance chains between objects. It’s a simple but powerful approach to make code reusable, modular, and maintainable.

By using these concepts, you can implement sophisticated object-oriented designs in JavaScript, allowing for efficient management of objects and their behaviors.

