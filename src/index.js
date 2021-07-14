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

/*
Sets
functions: add, remove, has, values, size
*/
function mySet() {
  var collection = [];

  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  this.values = function () {
    return collection;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      secondSet.add(e);
    });
    return unionSet;
  };

  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  // check if this set is subset of other set
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (e) {
      return otherSet.has(e);
    });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("a");
setB.add("b");
setB.add("c");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("a");
setD.add("b");
setD.add("c");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
setD.add("d");

//===================================
