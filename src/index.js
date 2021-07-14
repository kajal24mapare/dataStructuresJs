/*
  Stacks
  functions: push, pop, peek, length
*/
var letters = [];
var word = "racecar";
var rWord = "";
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
for (var j = 0; j < word.length; j++) {
  rWord += letters.pop();
}
if (word === rWord) {
  console.log(word, "is Palindrome");
} else {
  console.log(word, "is not a Palindrome");
}

// Create a stack
var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("kajal");
console.log(myStack.size());
//----------------------------------
