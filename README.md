# @mquanit/ds-lib

 `@mquanit/ds-lib` is a TypeScript library that provides implementations of common data structures such as LinkedList and Queue.

## Installation

You can install `@mquanit/ds-lib` using npm, yarn and pnpm:

```bash
npm install @mquanit/ds-lib

yarn add @mquanit/ds-lib
```

# API Reference

## Queue
The <b>Queue</b> class provides a basic implementation of a queue data structure.

```javascript
import { Queue } from '@mquanit/ds-lib';

// Create a queue of strings
const myQueue = new Queue<string>();
myQueue.enqueue('apple');
myQueue.enqueue('banana');
myQueue.enqueue('orange');

// Perform operations on the queue
console.log('Front:', myQueue.front()); // Output: 'apple'
console.log('Size:', myQueue.size()); // Output: 3

myQueue.dequeue();
myQueue.printQueue(); // Output: ['banana', 'orange']
```

## LinkedList
The <b>LinkedList</b> class allows you to create and manipulate a linked list.

```javascript
import { LinkedList } from '@mquanit/ds-lib';

// Create a linked list of numbers
const myList = new LinkedList<number>();
myList.append(10);
myList.append(20);
myList.append(30);

// Display the linked list elements
myList.display();
```

# Contributing
Contributions are welcome! If you have any suggestions, bug reports, or enhancements, please open an issue or submit a pull request.

# License
This project is licensed under the ISC License - see the LICENSE file for details.