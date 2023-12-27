/**
 * A queue is a linear data structure that follows the First In, First Out (FIFO) principle,
 * meaning that the first element added to the queue will be the first one to be removed.
 */
export class Queue<T> {
  private queue: T[];

  constructor() {
    this.queue = [];
  }

  /**
   * Returns the size of the queue
   * @returns Number of elements in the queue. Returns 0 if the queue is empty
   */
  size(): number {
    return this.queue.length;
  }

  /**
   * Checks if the queue is empty
   * @returns bool
   */
  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  /**
   * Adds an element to the queue
   * @param element
   */
  enqueue(element: T): void {
    this.queue.push(element);
  }

  /**
   * Removes and returns the first element from the queue
   */
  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.queue.shift() as T;
  }

  /**
   * Returns the first element in the queue without removing it
   * @returns
   */
  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.queue[0];
  }

  /**
   * Print the queue elements
   */
  printQueue(): void {
    console.log(this.queue);
  }
}
