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