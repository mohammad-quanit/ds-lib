export class Queue {
  private queue: any[]
  constructor() {
    this.queue = [];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  enqueue(item: any) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    this.queue.shift();
  }
}